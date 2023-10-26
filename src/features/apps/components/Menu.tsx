import React from 'react'
import './styles/Menu.css'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
  return (
    <div className="menu">
        <div className="menu__container">
          <NavLink to={'calendar'} style={{textDecoration: 'none'}}>
            {
              ({isActive}) => (
              <div className="menu__item menu__calendar" style={isActive ? {backgroundColor: '#D7EDFF'} : {backgroundColor: ''}}>
                <div className="menu__item-svg">
                  <svg width="35px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#84919A" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <div className="menu__item-descr">
                  Todo kalendar
                </div>
              </div>
            )}
          </NavLink>
          <NavLink to={'kanban'} style={{textDecoration: 'none'}}>
          {
            ({isActive}) => (
            <div className="menu__item menu__calendar" style={isActive ? {backgroundColor: '#D7EDFF'} : {backgroundColor: ''}}>
              <div className="menu__item-svg">
              <svg width="35px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="#84919A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 12.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V12.9C13.5 14.4 14.14 15 15.73 15H19.77C21.36 15 22 14.4 22 12.9Z" stroke="#84919A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
              <div className="menu__item-descr">
                Kanban board
              </div>
            </div>
          )}
          </NavLink>
        </div>
    </div>
  )
}
