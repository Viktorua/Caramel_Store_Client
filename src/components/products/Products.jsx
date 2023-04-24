import React from 'react';

import styles from './products.styles.css'

let ProductsJSON = require('./products-all.json')

function ProductsContent(props) {

    const dimentions = props.param.dimentions

    return (
        <div className={'products__pair__item__content'}>
            <span className={'products__pair__item__content__name'}>{props.param.name}</span>
            <span className={'products__pair__item__content__price'}>{props.param.price} р</span>
            <span className={'products__pair__item__content__size'}>Размеры</span>
            <div className={'dimentions'}>
            {
                dimentions.map((value, index) => {
                    if (index === dimentions.length - 1) {
                        return (
                            <span className={'products__pair__item__content__dimentions'}>{value}</span>
                        )
                    }
                    return (<span className={'products__pair__item__content__dimentions'}>{value}, </span>)
                })
            }
            </div>
            <button className={'products__pair__item__content__button'}>В корзину</button>
        </div>
    )
}

export default function Products(props) {

    return (
        <div className='products'>
            <div className='products__pair'>
            {
                ProductsJSON.products.map((value, index) => {
                    
                    if (index % 2 === 0) {
                        return (                    
                            <div className={'products__pair__item products__pair__item-left'}>
                                {/* <img src={`http://localhost:5000/product${index + 1}.svg`} alt="" className={'products__pair__item__image'}/> */}
                                {/* <img src={require(`${value.path}`)} alt="" className={'products__pair__item__image'}/> */}
                                <ProductsContent param={value}/>
                            </div>        
                        )
                    }
                    else {
                        
                        return (                    
                            <div className={'products__pair__item products__pair__item-right'}>
                                {/* <img src={`http://localhost:5000/product${index + 1}.svg`} alt="" className={'products__pair__item__image'}/> */}
                                <ProductsContent param={value}/>
                                {/* <img src={require(`${value.path}`)} alt="" className={'products__pair__item__image'}/> */}
                            </div>        
                        )
                    }
                })
            }
            </div>      
        </div>
    )
}