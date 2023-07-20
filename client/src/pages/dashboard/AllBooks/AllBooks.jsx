import React, { useEffect, useState } from 'react'

import "../../../../public/styles/allBooks/allBooksStyle.scss"
import { SearchCard } from './SearchCard/SearchCard'
import { BookResultList } from './BookResultList/BookResultList'

export const AllBooks = () => {
  const [showResult, setShowResult] = useState(false)
  const [search, setSearch] = useState()


  

  return (
    <>
    <section className='sectionBgPpalAllBooks'></section>
    <div className='sectionContentPpalAllBooks'>
        <SearchCard setSearch={setSearch} setShowResult={setShowResult}/>
        <BookResultList  showResult={showResult} setShowResult={setShowResult} search={search}/>
    </div>
    </>
  )
}