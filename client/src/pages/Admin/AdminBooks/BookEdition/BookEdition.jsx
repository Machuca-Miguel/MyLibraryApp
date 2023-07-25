import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const BookEdition = () => {
  const [bookData, setBookData] = useState()
  const {book_id} = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/books//allMyBookshelves/oneBook/${book_id}`)
      .then((res) =>{
        setBookData(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
    return () => {
      
    }
  }, [])
  
  

  return (
    <div>BookEdition</div>
  )
}
