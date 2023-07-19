import React from 'react'

import { UserCard } from '../../../components/UserCard/UserCard'
import "../../../../public/styles/user/userStyle.scss"
import { Bookshelf } from '../../books/Bookshelf/Bookshelf'
import { InProgress } from '../../../components/InProgress/InProgress'
import { AchievementCard } from '../../../components/AchievementCard/AchievementCard'

export const User = () => {
  return (
    <>
    
    <section className='sectionBgPpal'></section>
    <section className='userContentPpal'>
      <UserCard/>
      <InProgress/>
      <Bookshelf/>
      <AchievementCard/>

      </section>
    </>
  )
}
