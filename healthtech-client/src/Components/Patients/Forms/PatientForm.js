import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';

const PatientForm = React.forwardRef((props,ref) => {
    const { fNameRef, lNameRef, cnsRef, bdayRef } = ref;
    const [valid, setValid] = useState(false);
    const [invalidCns, setInvalidCns] = useState('');
    function filterLength(e, maxlength=12) {
        if(e.target.value.length >= maxlength) e.target.value = e.target.value.substr(0,maxlength);
    }
    function filterNumber(e){
        e.target.value = e.target.value.replace(/[^\d]/g, '')
    }
    function handleCNSInput(e){
        filterNumber(e);
        filterLength(e, 15);
        if(e.target.value.length === 15) {
            let cns = e.target.value;
            if(!isCNSValid(cns)){
                setInvalidCns('Cartão SUS inválido')
                setValid(true)
            }
            const soma = somaPonderada(cns)
            if(!((soma % 11) === 0)) {
                setInvalidCns('Cartão SUS inválido')
                setValid(true)
            } else {
                setValid(false)
            }
        }
    }
    function isCNSValid(cns){
        if((cns.match(/([1-2]\d{10}00[0-1]\d)/g)) || cns.match(/([7-9]\d{14})/g)) return true;
        return false;
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
      <>
        <FloatingLabel controlId='fName' label='Primeiro Nome'>
            <Form.Control type='text' placeholder='Primeiro Nome' ref={fNameRef} onChange={filterLength} required/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>Preencha o campo do Primeiro Nome</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId='lName' label='Sobrenome'>
            <Form.Control type='text' placeholder='Sobrenome' ref={lNameRef} onChange={filterLength} required/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>Preencha o campo do Sobrenome</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId='cns' label='CNS'>
            <Form.Control type='text' placeholder='CNS' ref={cnsRef} onChange={handleCNSInput} isInvalid={valid} required/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{invalidCns}</Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel controlId='bday' label='Nacimento'>
            <Form.Control type='date' placeholder='Nacimento' ref={bdayRef} onChange={filterLength} required/>
            <Form.Control.Feedback type='valid'>Preenchido corretamento</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>Preencha o campo do Nascimento</Form.Control.Feedback>
        </FloatingLabel>
      </>
  )
})

export default PatientForm