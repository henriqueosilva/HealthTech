import React, { useRef } from 'react'
import PatientForm from './Forms/PatientForm';

function Add() {
  const fNameRef = useRef('')
  const lNameRef = useRef('')
  const cnsRef = useRef('')
  const bdayRef = useRef('')

  return (
    <div>
      <PatientForm ref={{
                fNameRef: fNameRef,
                lNameRef: lNameRef,
                cnsRef: cnsRef,
                bdayRef: bdayRef
            }} />
    </div>
  )
}

export default Add