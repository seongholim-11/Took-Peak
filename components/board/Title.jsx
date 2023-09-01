'use client'

import React from 'react'
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

import './board.scss'
import Link from 'next/link';

function Title({title}) {
  return (
    <Container className='boardtitle'>
        <div>
          <h2>{title}</h2>
          <Link href={'/write'}><Button variant="primary">글쓰기</Button></Link>
        </div>
    </Container>
  )
}

export default Title