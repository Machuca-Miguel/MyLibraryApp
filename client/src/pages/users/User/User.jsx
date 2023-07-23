import React from 'react'

import { UserCard } from '../../../components/UserCard/UserCard'
import "../../../../public/styles/user/userStyle.scss"
import { Bookshelf } from '../../books/Bookshelf/Bookshelf'
import { InProgress } from '../../../components/InProgress/InProgress'
import { AchievementCard } from '../../../components/AchievementCard/AchievementCard'
import { SearchCardUser } from '../../../components/SearchCardUser/SearchCardUser'

export const User = () => {
  return (
    <>
    
    <section className='sectionBgPpal'></section>
    <section className='userContentPpal'>
      <UserCard/>
      <InProgress/>
      <SearchCardUser/>
      <Bookshelf/>
      <AchievementCard/>

      </section>
    </>
  )
}
