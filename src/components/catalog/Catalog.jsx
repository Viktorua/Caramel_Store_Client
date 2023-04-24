import React, {useState} from "react";
import {useNavigate} from 'react-router'

import './catalog.styles.css'

const urls = [
    {
        url: 'shop' ,
        properties: {
            text : 'Все категории',
            isActive: true
        }
        
    },
    {
        url: 'shop/skirts' ,
        properties: {
            text : 'Юбки',
            isActive: false 
       }
    },
    {
        url: 'shop/dresses', 
        properties: {
            text: 'Платья',
            isActive: false
        }
    },
    {
        url : 'shop/pants', 
        properties: {
            text: 'Брюки',
            isActive: false
        }
    },
    {
        url: 'shop/shoes',  
        properties : { 
            text: 'Обувь',
            isActive: false
        }
    },
    {
        url: 'shop/sportswear',
        properties: {
            text: 'Спортивная одежда',
            isActive: false 
        }
    },
    {
        url: 'shop/underwear', 
        properties: {
            text: 'Нижнее бельё',
            isActive: false
        }
    }

]


export default function Catalog() {

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
        <div className={'catalog'}>
            <div className={'catalog__header'}>
                <div className={'catalog__header__text'}>Каталог</div>
            </div>
            <div className={'categories'}>
                <ul className={'categories__list'}>
                    {
                        urls.map((value, index) => {
                            return (
                                <li className={'category-item'}>
                                    <span className={value.properties.isActive === true ? 
                                        'category-item__text category-item__text-active' : 
                                        'category-item__text'} 
                                        onClick={() => {
                                            urls.forEach((elem, idx) => {
                                                if (idx === index) {
                                                    elem.properties.isActive = true
                                                }
                                                else {
                                                    elem.properties.isActive = false
                                                }
                                            })
                                            changeRoute(value.url)
                                        }}>
                                            {value.properties.text}
                                    </span>
                                </li>
                            )
                        }) 
                    }
                </ul>
            </div>
        </div>
    )
}