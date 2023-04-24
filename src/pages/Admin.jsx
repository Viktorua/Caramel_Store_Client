import React from 'react';
import {Button, Container} from "react-bootstrap";
import './ADMIN.css'
import CreateProduct from '../components/modals/CreateProduct';
import { useEffect, useState } from "react";


const Admin = () =>{
    const[typeVisible, setTypeVisible] = useState(false)
    return(                  
        <Container>
            <Button
            variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить товар
            </Button>
            <CreateProduct show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>

    );
};


export default Admin;

    /*<div className="Admin">
                <Button className="start" color="secondary">
                    Добавить товар
                </Button>
                <CreateProduct/>
            </div>
            <Button className={'Admin'} onClick={()=>CreateProduct()}>
                Добавить товар
            </Button>*/