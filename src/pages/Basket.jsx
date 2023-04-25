import React from 'react';
import './basket.css'
import {Button, Container} from "react-bootstrap";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router'

export default function Basket() {
    const[typeVisible, setTypeVisible] = useState(false)

    const navigate = useNavigate();

    const changeRoute = (url) => {
        if (url) {
            navigate(`/${url}`)
        }
        else {
            navigate('/')
        }
    }   
        return (
            <Container>
                <ul className={'bas'}>
                    <b>
                        Корзина пуста
                    </b>
                </ul>
                <Button className={'ul'} variant="btn btn-dark" 
                onClick={() => {changeRoute("shop") }}>
                    <ul>
                    Начать шоппинг
                    </ul>
                </Button>
        </Container>
        )
}