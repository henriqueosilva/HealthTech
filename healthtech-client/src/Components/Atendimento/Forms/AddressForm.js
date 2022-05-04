import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap';

function AddressForm(props) {
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
      cep: '',
      endereco: '',
      numero: '',
      uf: '',
      cidade: ''
  });
  function getPastValues(){
    if(props.atendimento?.address) {
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
    <Form className='d-flex flex-column' id='register-patient-form' onSubmit={handleSubmit}>
        <FloatingLabel controlId='cep' label='CEP'>
            <Form.Control type='text' defaultValue={form.cep} placeholder='CEP' onChange={e => setField('cep', e.target.value)} isInvalid={!!errors.cep}/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{ errors.cep }</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId='endereco' label='Endereço'>
            <Form.Control type='text' defaultValue={form.endereco} placeholder='Endereço' onChange={e => setField('endereco', e.target.value)} isInvalid={!!errors.endereco}/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{ errors.endereco }</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId='numero' label='Numero da residência'>
            <Form.Control type='text' defaultValue={form.numero} placeholder='Numero da residência' onChange={e => setField('numero', e.target.value)} isInvalid={!!errors.numero}/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{ errors.numero }</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId='uf' label='uf'>
            <Form.Control as='select' value={form.uf} placeholder='uf' onChange={e => setField('uf', e.target.value)} isInvalid={!!errors.uf}>
              <option value={""}></option>
              <option value={"AL"}>AL</option>
              <option value={"SE"}>SE</option>
            </Form.Control>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{ errors.uf }</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId='cidade' label='cidade'>
            <Form.Control type='text' defaultValue={form.cidade} placeholder='cidade' onChange={e => setField('cidade', e.target.value)} isInvalid={!!errors.cidade} />
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{ errors.cidade }</Form.Control.Feedback>
        </FloatingLabel>
        <div className='my-3' style={{alignSelf:'center'}}>
            <Button className='me-2' variant='success' type='submit' form='register-patient-form'>Proximo</Button>
            <Button onClick={props.prevStep}>Voltar</Button>
        </div>
      </Form>
  )
}

export default AddressForm