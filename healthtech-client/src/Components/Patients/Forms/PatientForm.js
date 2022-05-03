import React, { useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

function PatientForm(props) {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        fName: '',
        lName: '',
        cns: '',
        bday: '',
    });

    function isCNSValid(cns){
        if((cns.match(/([1-2]\d{10}00[0-1]\d)/g)) || cns.match(/([7-9]\d{14})/g)) {
        const soma = somaPonderada(cns);
        if(!((soma % 11) === 0)) {
            return true;
        } else {
            return false;
        }
        };
        return false;
    }
    function handleSubmit(e){
        e.preventDefault();
        const newErrors = findFormErrors()
        if (Object.keys(newErrors).length > 0){
            setErrors(newErrors)
            return;
        }
        props.registerPatient(form)
        .then(res => {
            if(res.status === 'error') setErrors({...errors, registerError:res.data});
            if(res.status === 'success') {
                navigate('/pacientes')
            } //call function to raise toast to register patient
        })
    }
    const findFormErrors = () => {
        const { fName, lName, cns, bday } = form;
        const newErrors = {};

        if (!fName || fName === '' || fName.length <3) newErrors.fName = 'Nome Inválido!';
        if (!lName || lName === '') newErrors.lName = 'Sobrenome inválido!';
        if (!cns || cns === '') newErrors.cns = 'CNS deve ser preenchida!';
        else if (cns.length < 15) newErrors.cns = 'CNS muito curta!';
        else if (cns.length > 15) newErrors.cns = 'CNS muito longa!';
        else if (isCNSValid(cns)) newErrors.cns = 'CNS inválida!'
        if (!bday || bday.length === '') newErrors.bday = 'Data de nascimento inválida!';

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
    function somaPonderada(cns){
        cns = cns.split("")
        let soma = 0;
        cns.forEach((element, index) => {
            let tmp = parseInt(element, 10);
            soma +=  tmp * (15 - index);
        });
        return soma;
    }
  return (
      <Form className='d-flex flex-column' id='register-patient-form' onSubmit={handleSubmit}>
        <FloatingLabel controlId='fName' label='Primeiro Nome'>
            <Form.Control type='text' placeholder='Primeiro Nome' onChange={e => setField('fName', e.target.value)} isInvalid={!!errors.fName}/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{ errors.fName }</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId='lName' label='Sobrenome'>
            <Form.Control type='text' placeholder='Sobrenome' onChange={e => setField('lName', e.target.value)} isInvalid={!!errors.lName}/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{ errors.lName }</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId='cns' label='CNS'>
            <Form.Control type='text' placeholder='CNS' onChange={e => setField('cns', e.target.value)} isInvalid={!!errors.cns}/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{ errors.cns }</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId='bday' label='Nascimento'>
            <Form.Control type='date' placeholder='Nascimento' onChange={e => setField('bday', e.target.value)} isInvalid={!!errors.bday}/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{ errors.bday }</Form.Control.Feedback>
        </FloatingLabel>
        <div className='my-3' style={{alignSelf:'center'}}>
            <Button className='me-2' variant='success' type='submit' form='register-patient-form'>Cadastrar Paciente</Button>
            <Button href='/pacientes'>Voltar</Button>
        </div>
      </Form>
  )
}

export default PatientForm