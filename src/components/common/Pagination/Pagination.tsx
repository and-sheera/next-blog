import Button from '@/components/ui/Button/Button'
import Icon from '@/components/ui/Icon/Icon'
import React from 'react'
import './Pagination.scss'
import Link from 'next/link'

interface IPagination {
  pagesNum: number
  currentPage: number
}

export const revalidate = 5

const Pagination = ({ pagesNum, currentPage }: IPagination) => {
  const rangeArray = (from: number, to: number): number[] => {
    let i = from
    const range = []
    while (i <= to) {
      range.push(i)
      i += 1
    }
    return range
  }

  currentPage = isNaN(currentPage) ? 1 : currentPage

  const paginationItem = (num: number) => (
    <Link
      href={num === 1 ? '/' : `/?page=${num}`}
      className={
        currentPage === num
          ? 'pagination__link pagination__link--active'
          : 'pagination__link'
      }
    >
      {num}
    </Link>
  )
  return (
    <div className="pagination">
      {currentPage !== 1 && (
        <Button link={currentPage === 2 ? '/' : `/?page=${currentPage - 1}`}>
          <Icon name="arrow-left" />
          Предыдущая
        </Button>
      )}
      {currentPage > 2 && <div className="pagination__link">...</div>}
      {currentPage > 1 && paginationItem(currentPage - 1)}
      {paginationItem(currentPage || 1)}
      {currentPage + 1 <= pagesNum && paginationItem(currentPage + 1)}
      {currentPage + 2 <= pagesNum && (
        <div className="pagination__link">...</div>
      )}
      {currentPage !== pagesNum && (
        <Button link={`/?page=${(currentPage ? currentPage : 1) + 1}`}>
          Следующая
          <Icon name="arrow-right" />
        </Button>
      )}
    </div>
  )
}

export default Pagination
