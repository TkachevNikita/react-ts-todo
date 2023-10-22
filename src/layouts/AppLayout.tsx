import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import '../styles/AppLayout.css'

export const AppLayout = () => {
  return (
    <div className='page'>
        <Header/>
        <div className="page__container">
          <Menu/>
          <div className="page__content container">
              <Outlet/>
          </div>
        </div>
    </div>
  )
}
