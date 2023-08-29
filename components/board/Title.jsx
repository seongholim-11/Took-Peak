'use client'

import React from 'react'
import Container from "react-bootstrap/Container";

import './board.scss'

function Title({title}) {
  return (
    <Container className='boardtitle'>
        <h2>{title}</h2>
        <div className='search'>
            검색 기능
        </div>
    </Container>
  )
}

export default Title