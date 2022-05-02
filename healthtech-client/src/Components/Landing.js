import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import NavbarPartial from './Partials/NavbarPartial'

function Landing() {
  return (
    <>
        <NavbarPartial />
        <Container fluid className='d-flex justify-content-center'>
            <Outlet />
        </Container>
    </>
  )
}

export default Landing