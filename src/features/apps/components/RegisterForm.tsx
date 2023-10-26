import React, { useState } from 'react'
import { LoginInput } from './UI/LoginInput'
import './styles/LoginForm.css'
import { Link } from 'react-router-dom'
import { Button, FormControl, TextField } from '@mui/material'
import { getAuth } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'

export const RegisterForm = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');;
    const [password, setPassword] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((resolve) => console.log(resolve))
            .catch((error) => console.log(error));
    }

  return (
    <div className="login">
        <form className="form">
            <h2 className="form__title">
                Регистрация
            </h2>
            <TextField
                required
                id="outlined-basic"
                type="email" 
                autoComplete="email" 
                label="Введите email" 
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField 
                required 
                id="outlined-basic" 
                type="password" 
                label="Введите пароль" 
                variant="outlined" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField 
                id="outlined-basic" 
                type="password" 
                label="Повторите пароль" 
                variant="outlined" 
            />
            <Button variant="contained" size="large" color="primary" onClick={(e) => onSubmit(e)}>Зарегистрироваться</Button>
            <div className="form__ask">
                Есть аккаунт? <Link to="sign">Войти</Link>
            </div>
        </form>
    </div>
  )
}

