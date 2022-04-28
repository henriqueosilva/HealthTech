import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import NavbarPartial from './Partials/NavbarPartial'

function Landing() {
  return (
    <>
        <NavbarPartial />
        <Container className='fluid' style={{marginLeft:'25px'}}>
            <Outlet />
        </Container>
    </>
  )
}

export default Landing