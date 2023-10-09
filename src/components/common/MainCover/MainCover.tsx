import React from 'react'
import Image from 'next/image'
import './MainCover.scss'
import coverImg from './main-cover.jpg'

const MainCover = () => {
  return (
    <div className="main-cover">
      <Image src={coverImg} alt="cover" />
    </div>
  )
}

export default MainCover
