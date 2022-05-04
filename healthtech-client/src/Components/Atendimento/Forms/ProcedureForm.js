import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap';

function ProcedureForm(props) {
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
      cep: '',
      endereco: '',
      numero: '',
      uf: '',
      cidade: ''
  });
  function getPastValues(){
    if(props.atendimento?.procedure) {
      setForm({
        cep: props.atendimento.address.cep,
        endereco: props.atendimento.address.endereco,
        numero: props.atendimento.address.numero,
        uf: props.atendimento.address.uf,
        cidade: props.atendimento.address.cidade
      })
    }
  }
  function handleSubmit(e){
    e.preventDefault();
    const newErrors = findFormErrors()
    if (Object.keys(newErrors).length > 0){
      setErrors(newErrors)
      return;
    }
    props.nextStep()
    props.handleAtendimento({address:form}) //call function to raise toast to register patient
  }
  const findFormErrors = () => {
    const { cep, endereco, numero, uf, cidade } = form;
    const newErrors = {};
  
    if (!cep || cep === '') newErrors.cep = 'Nome Inválido!';
    if (!endereco || endereco === '') newErrors.endereco = 'Endereço inválido!';
    if (!numero || numero === '') newErrors.numero = 'Numero da residência deve ser preenchido!';
    if (!uf || uf === '') newErrors.uf = 'Estado inválido!';
    if (!cidade || cidade === '') newErrors.uf = 'Cidade inválida!';
  
    return newErrors;
  
  }
  function setField(field, value) {
    setForm({
        ...form,
        [field]: value
    })
    if( !!errors[field]) setErrors({
        ...errors,
        [field]: null
    })
  }
  useEffect(()=>{
    getPastValues();
  },[])
  return (
    <>
    <h2>WORK IN PROGRESS!
      {"need to figure out how to add new procedure dinamicaly"}
    </h2>
    <Form className='d-flex flex-column' id='register-patient-form' onSubmit={handleSubmit}>
        <FloatingLabel controlId='fName' label='Primeiro Nome'>
            <Form.Control type='text' defaultValue={form.fName} placeholder='Primeiro Nome' onChange={e => setField('fName', e.target.value)} isInvalid={!!errors.fName}/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{ errors.fName }</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId='lName' label='Sobrenome'>
            <Form.Control type='text' defaultValue={form.lName} placeholder='Sobrenome' onChange={e => setField('lName', e.target.value)} isInvalid={!!errors.lName}/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{ errors.lName }</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId='cns' label='CNS'>
            <Form.Control type='text' defaultValue={form.cns} placeholder='CNS' onChange={e => setField('cns', e.target.value)} isInvalid={!!errors.cns}/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{ errors.cns }</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId='bday' label='Nascimento'>
            <Form.Control type='date' defaultValue={form.bday} placeholder='Nascimento' onChange={e => setField('bday', e.target.value)} isInvalid={!!errors.bday}/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{ errors.bday }</Form.Control.Feedback>
        </FloatingLabel>
      <div className='my-3' style={{alignSelf:'center'}}>
        <Button className='me-2' variant='success' type='submit' form='register-patient-form' >Cadastrar</Button>
        <Button onClick={props.prevStep}>Voltar</Button>
      </div>
    </Form>
    </>
  )
}

export default ProcedureForm