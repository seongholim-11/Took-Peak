'use client'

import React from 'react'
import Container from "react-bootstrap/Container";

import './board.scss'

function Title({title}) {
  return (
    <Container className='boardtitle'>
        <div>
          <h2>{title}</h2>
        </div>
    </Container>
  )
}

export default Title