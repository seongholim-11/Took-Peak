import Title from '@/components/board/Title'
import List from '@/components/board/List'
import React from 'react'

export const dynamic = 'force-dynamic' 

export default function page() {
  return (
    <div>
        <Title title={'질문게시판'}/>
        <List/>
    </div>
  )
}
