import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Patient(props) {
  return (
    <Card className='mb-3 container' style={{border:"2px solid rgba(0,0,0,.125)"}}>
      <Card.Title style={{alignSelf:'center', marginTop:'10vh'}}>{props.patient.fname} {props.patient.lname}</Card.Title>
      <Card.Body>PID: {props.patient.pid}</Card.Body>
      <Card.Body>CNS: {props.patient.cns}</Card.Body>
      <Card.Body>Nascimento: {props.patient.nascimento}</Card.Body>
      <Button style={{alignSelf:'center', marginBottom:'5vh'}}>Detalhes</Button>
    </Card>
  )
}

export default Patient