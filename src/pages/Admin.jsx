import React from 'react';
import {Button, Container} from "react-bootstrap";
import './ADMIN.css'
import CreateProduct from '../components/modals/CreateProduct';
import CreateDevice from "../components/modals/CreateDevice";
import { useEffect, useState } from "react";


const Admin = () =>{
    const[typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return(                  
        <Container>
            <Button className = {"start"}
            variant={"btn btn-dark"}
                onClick={() => setTypeVisible(true)}
            >
                Добавить товар
            </Button>
            <Button
                variant={"outline-dark"}
                onClick={() => setDeviceVisible(true)}
            >
                Добавить описание
            </Button>
            <CreateProduct show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        </Container>

    );
};


export default Admin;
