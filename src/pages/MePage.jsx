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

            <div className='admin-panel'>
                <span className='panel-title'>Административная панель</span>
                <form action="" className='admin-form'>
                    <select name="types" id="" className='admin-select'>
                        <option value="all">Все категории</option>
                        <option value="skirt">Юбки</option>
                        <option value="dresses">Платья</option>
                        <option value="pants">Брюки</option>
                        <option value="shoes">Обувь</option>
                        <option value="sportswear">Спортивная одежда</option>
                        <option value="underwear">Нижнее бельё</option>
                    </select>
                    <input type="text" placeholder='Название...' className='inpt'/>
                    <input type="text" placeholder='Описание...' className='inpt'/>
                    <input type="text" placeholder='Цена...' className='inpt'/>
                    <input type="text" placeholder='Размер...' className='inpt'/>
                    <input type="file"/>          
                </form>

                <button>Добавить товар</button>
            </div>
        </div>
    )
})

export default MePage