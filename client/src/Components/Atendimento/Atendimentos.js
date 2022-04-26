import React from 'react'
import { Outlet } from 'react-router-dom'

function Atendimentos() {
  return (
    <div>
      Atendimentos
      <Outlet />
    </div>
  )
}

export default Atendimentos