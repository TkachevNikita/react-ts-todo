import React from 'react'
import './styles/MyInput.css'

interface LoginInputProps {
    placeholder?: string
}

export const LoginInput: React.FC<LoginInputProps> = ({...rest}) => {
  
  return (
    <input {...rest}></input>
  )
}
