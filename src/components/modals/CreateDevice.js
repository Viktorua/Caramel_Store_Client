/*import React from 'react';
import { Form } from 'react-bootstrap';
import {Button, Modal, Container} from "react-bootstrap";
import {createDevice, createType} from "../../http/deviceAPI";

const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
}

const createDevice = ({show, onHide}) =>{
    
    return(                  
  
        <Modal
        size="lg"
        show={show}
        onHide={onHide}
        centered
    >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Добавить новый товар
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
            <Col md={4}>
            <Form.Control
              value={i.description}
                 onChange={(e) => changeInfo('description', e.target.value, i.number)}
                 placeholder="Введите описание свойства"
                  />
            </Col>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
      <Button variant="outline-success" onClick={onHide}>Добавить</Button>
    </Modal.Footer>
  </Modal>
          
           

    );
};


export default createDevice;*/


import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";

const createDevice = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addDevice = () => {
        createDevice({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить описание
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите описание товара"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default createDevice;
