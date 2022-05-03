import React, { Suspense, useEffect, useState } from 'react'

function Add() {
  const [error, setError] = useState('');
  const [atendimento, setAtendimento] = useState({});
  const [step, setStep] = useState();
  const PatientForm = React.lazy(()=> import('./Forms/PatientForm'))

  function handleAtendimento(form) {
    if(form?.patient){
      setAtendimento({...atendimento, patient:form.patient})
    }
    if(form?.address){
      setAtendimento({...atendimento, address:form.address})
    }
  }
  function prevStep(){
    setStep(step-1)
  }
  function nextStep(){
    setStep(step+1)
  }
  useEffect(()=>{
    setStep(1);
  },[])
  console.log(step)
  return (
    <div style={{width:'50vw'}}>
      <Suspense fallback={<div>Carregando...</div>}>
        {step === 1 ? <PatientForm handleAtendimento={handleAtendimento} prevStep={prevStep} nextStep={nextStep}/> : "" }
        {step === 2 ? <PatientForm handleAtendimento={handleAtendimento} prevStep={prevStep} nextStep={nextStep}/> : "" }
        {step === 3 ? <PatientForm handleAtendimento={handleAtendimento} prevStep={prevStep} nextStep={nextStep}/> : "" }
      </Suspense>
      
    </div>
  )
}

export default Add