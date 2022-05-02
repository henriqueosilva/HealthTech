import React from 'react'
import { Card } from 'react-bootstrap'

function Patient(props) {
  return (
    <Card className='mb-3 container' style={{border:"2px solid rgba(0,0,0,.125)"}}>
      <h5>Paciente</h5>
    </Card>
  )
}

export default Patient