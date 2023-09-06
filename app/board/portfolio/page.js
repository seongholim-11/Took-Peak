import Title from '@/components/board/Title'
import PortfolioCard from '@/components/board/PortfolioCard'
import React from 'react'

export const dynamic = 'force-dynamic' 

export default function page() {
  return (
    <div>
        <Title title={'포트폴리오게시판'}/>
        <PortfolioCard/>
    </div>
  )
}
