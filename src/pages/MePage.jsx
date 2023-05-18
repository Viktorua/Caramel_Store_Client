import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import './me.css'

const MePage = observer(() => {

    const {user} = useContext(Context)
    
    const navigate = useNavigate()

    const logout = () => {
        console.log(jwt_decode(localStorage.getItem('token')))
        user.setUser({})
        user.setIsAuth(false)
        navigate('/login')
    }

    

    return (
        <div className='me-page'>
            <div className='head'>
                <h1 style={{textAlign : 'left'}}>Личные данные</h1>
                <button className='log-out' onClick={logout}>
                    Выйти
                </button>
            </div> 
            <div className='user-data'>
                
            </div>
        </div>
    )
})

export default MePage