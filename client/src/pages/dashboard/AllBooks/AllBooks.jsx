import React, { useState } from 'react'
import { BookResultList } from './BookResultList/BookResultList'
import { SearchCard } from './SearchCard/SearchCard'

import "../../../../public/styles/allBooks/allBooksStyle.scss"

export const AllBooks = () => {
  const [search, setSearch] = useState()


  

  return (
    <>
    <section className='sectionBgPpalAllBooks'></section>
    <div className='sectionContentPpalAllBooks'>
        <SearchCard setSearch={setSearch} />
        <BookResultList search={search}/>
    </div>
    </>
  )
}