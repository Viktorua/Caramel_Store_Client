import React from 'react'

import Catalog from '../components/catalog/Catalog'
import Products from '../components/products/Products'

export default function CatalogPage(props) {

    return (
        <div className={'catalog-page'}>
            <Catalog/>
            <Products type={props.type}/>
        </div>
    )
}