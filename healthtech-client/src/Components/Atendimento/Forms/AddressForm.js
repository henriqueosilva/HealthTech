import React from 'react'

function AddressForm(props) {

  return (
    <div>
      <Button onClick={props.prevStep}>Previous</Button>
      <Button onClick={props.nextStep}>Next</Button>
    </div>
  )
}

export default AddressForm