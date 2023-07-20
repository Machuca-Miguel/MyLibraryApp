import React, { useContext } from 'react'

import { LastReadBook } from '../../../components/Bookshelves/LastBook/LastReadBook'
import { LastReadingBook } from '../../../components/Bookshelves/LastBook/LastReadingBook'
import { LastToReadBook } from '../../../components/Bookshelves/LastBook/LastToReadBook'
import { LastWishlisted } from '../../../components/Bookshelves/LastBook/LastWishlisted'

export const Bookshelf = () => {
  return (
    <div className='myBookshelfcard'>
      <div className='titleBookshelf'>
        <h3 className=''>My Bookshelf</h3>
        <hr className='' />
      </div>
      <div className='triptych'>
       
          <LastReadBook />
          <LastReadingBook/>
          <LastToReadBook/>
          <LastWishlisted/>
       

      </div>


    </div>
  )
}
