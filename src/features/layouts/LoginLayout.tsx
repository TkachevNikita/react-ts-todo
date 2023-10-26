import React from 'react'
import { Outlet } from 'react-router-dom'

export const LoginLayout = () => {
  return (
    <div className='page'>
        <Outlet/>
    </div>
  )
}
