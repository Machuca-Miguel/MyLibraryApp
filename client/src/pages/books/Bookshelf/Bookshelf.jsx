import React, { useContext } from 'react'

import { LastReadBook } from '../../../components/Bookshelves/LastBook/LastReadBook'
import { LastReadingBook } from '../../../components/Bookshelves/LastBook/LastReadingBook'
import { LastToReadBook } from '../../../components/Bookshelves/LastBook/LastToReadBook'
import { LastWishlisted } from '../../../components/Bookshelves/LastBook/LastWishlisted'
import { Button } from 'react-bootstrap'

export const Bookshelf = () => {
  return (
    <div className='myBookshelfcard'>
      <div className='titleBookshelf'>
        <h3 >My Bookshelf <Button variant='outline-light'>View all</Button></h3>
        <hr />
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
