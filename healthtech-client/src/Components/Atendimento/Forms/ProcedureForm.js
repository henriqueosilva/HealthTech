import React from 'react'
import { Button } from 'react-bootstrap'

function ProcedureForm(props) {

  return (
    <div>
      <Button onClick={props.prevStep}>Previous</Button>
      <Button>Submit</Button>
    </div>
  )
}

export default ProcedureForm