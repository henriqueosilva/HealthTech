import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, Col, Form, FormControl, Row } from 'react-bootstrap';
import Patient from './Patient';

function List() {
    const [patientList, setPatientList] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [error, setError] = useState('');
    const searchRef = useRef('');

    function getPatients() {
        setError('')
        fetch(`http://${process.env.REACT_APP_API_URI}/api/paciente`)
        .then(res => res.json())
        .then(res => {
            if(res.status === 'error') setError(res.data);
            if(res.status === 'sucess') setPatientList(res.data);
        })
    }
    function handleSubmitSearchPatient(e) {
        e.preventDefault();
        console.log(searchRef.current.value)
    }
    useEffect(()=>{
        getPatients()
    },[])
  return (
      <div style={{width:'90vw'}} className='d-flex flex-column mt-3'>
        {error && <Alert>{error}</Alert>}
        <div className='d-flex justify-content-center my-3'>
            <Form className='d-inline-flex' id='search-patient-form'>
                <Button className='me-2' onClick={handleSubmitSearchPatient}>Buscar</Button>
                <FormControl ref={searchRef} style={{minWidth:'30vw'}}/>
            </Form>
        </div>
        <Row className='row-cols-3 my-5'>
            {patientList?.map(patient => (
                <Col className='mb-3' key={patient.id}>
                    <Patient patient={patient}/>
                </Col>
            ))}
        </Row>
        <Button variant='success' style={{width:'30vw', alignSelf:'center'}} href='pacientes/add'>Adicionar Paciente</Button>
    </div>
  )
}

export default List