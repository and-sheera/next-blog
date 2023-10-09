import React from 'react'
import './Icon.scss'

interface IProps {
  name: string
}

const Icon = ({ name }: IProps) => {
  return (
    <svg className="ui-icon">
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}

export default Icon
