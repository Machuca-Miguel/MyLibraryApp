import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../../../../../public/styles/oneBook/oneBookStyle.scss"
import { OneBookCard } from './OneBookCard';


export const OneBook = () => {
  const [oneBookData, setoneBookData] = useState()
  let {type,key} = useParams();
  
  useEffect(() => {

    axios.get(`https://openlibrary.org/${type}/${key}.json?lang=es`)
      .then((res) => {
        console.log(res)
        setoneBookData(res.data)
      })
    
  
    return () => {
      
    }
  }, [])
  
  return (
    <>
    <section className='sectionBgOneBooks'></section>
    <section className='contentSection'>

     <OneBookCard oneBookData={oneBookData}/>
    </section>
    </>
  )
}
