'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Icon from '../../ui/Icon/Icon'
import Link from 'next/link'
import Inner from '../Inner/Inner'
import './Header.scss'
import { client } from '@/api/contentfulClient'
import { getPost } from '@/api/getPosts'

const headerMenu = [
  {
    name: 'Главная',
    link: '/',
  },
  {
    name: 'О нас',
    link: '/about',
  },
  {
    name: 'Контакты',
    link: '/contacts',
  },
  {
    name: 'Поиск',
    link: '/search',
  },
]

const Header = () => {
  const currentRoute = usePathname()

  return (
    <div className="header">
      <Inner modifiers="header">
        <Link href="/" className="header__logo">
          <Icon name="logo" />
        </Link>
        <ul className="header__menu">
          {headerMenu.map((item, index) => (
            <li className="header__item" key={index}>
              <Link
                href={item.link}
                className={
                  currentRoute === item.link
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </Inner>
    </div>
  )
}

export default Header
