import React, { useEffect, useState } from 'react'

import "../../../../public/styles/allBooks/allBooksStyle.scss"
import { SeachCard } from './SearchCard/SeachCard'
import { BookResultList } from './BookResultList/BookResultList'

export const AllBooks = () => {
  const [searchResult, setSearchResult] = useState()
  const [showResult, setShowResult] = useState(false)
  const [search, setSearch] = useState()


  

  return (
    <>
    <section className='sectionBgPpalAllBooks'></section>
    <div className='sectionContentPpalAllBooks'>
        <SeachCard setSearch={setSearch} setSearchResult={setSearchResult} setShowResult={setShowResult}/>
        <BookResultList searchResult={searchResult} showResult={showResult} search={search}/>
    </div>
    </>
  )
}