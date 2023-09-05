'use client'

import React from 'react'
import Container from "react-bootstrap/Container";

import './notice.scss'

function Title({title}) {
  return (
    <Container className='noticetitle'>
        <div>
          <h2>{title}</h2>
        </div>
    </Container>
  )
}

export default Title