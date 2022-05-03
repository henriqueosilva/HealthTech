import React from 'react'
import PatientForm from './Forms/PatientForm';

function Add() {
  async function registerPatient(patient) {
    console.log(patient)
    const patRawRes = fetch(`http://${process.env.REACT_APP_API_URI}/api/paciente`, {
      method: 'POST',
      body: JSON.stringify({
        method:'register',
        patient
      })
    })
    const patRes = await patRawRes
    return patRes.json();
  }

  return (
    <div style={{width:'50vw'}} >
      <PatientForm registerPatient={registerPatient} />
    </div>
  )
}

export default Add