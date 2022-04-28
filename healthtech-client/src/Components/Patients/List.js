import React, { useEffect, useRef, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import PatientForm from './Forms/PatientForm';
import Patient from './Patient';

function List() {
    const fNameRef = useRef('')
    const lNameRef = useRef('')
    const cnsRef = useRef('')
    const bdayRef = useRef('')
    const [patientList, setPatientList] = useState();

    function getPatients() {
        fetch(`${process.env.REACT_APP_API_URI}/api/pacientes`)
        .then(res => res.json())
        .then(setPatientList)
    }
    useEffect(()=>{
        getPatients()
    },[])
  return (
    <Row className='row-cols-3'>
        {patientList?.map(patient => (
            <Col className='mb-3' key={patient.id}>
                <Card className='mb-3 d-inline-block'>
                    <Patient patient={patient}/>
                </Card>
            </Col>
        ))}
        <PatientForm ref={{
            fNameRef: fNameRef,
            lNameRef: lNameRef,
            cnsRef: cnsRef,
            bdayRef: bdayRef
        }} />
    </Row>
  )
}

export default List