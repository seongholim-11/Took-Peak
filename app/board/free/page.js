import Title from '@/components/board/Title'
import List from '@/components/board/List'
import Pagination from '@/components/board/Pagination'
import React from 'react'

export default function page() {
  return (
    <div>
        <Title title={'자유게시판'}/>
        <List/>
        <Pagination/>
    </div>
  )
}
