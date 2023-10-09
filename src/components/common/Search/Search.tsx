'use client'
import React, { useEffect } from 'react'
import './Search.scss'

const Search = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef?.current?.focus()
  })

  const posts = []

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // posts = х
  }

  return (
    <div className="search">
      <form className="search__controls" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="Поиск"
          ref={inputRef}
        />
        <button className="search__submit" type="submit">
          s
        </button>
      </form>
      <div className="search__body"></div>
    </div>
  )
}

export default Search
