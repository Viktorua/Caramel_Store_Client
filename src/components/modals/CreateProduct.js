import React from 'react';
import { Form } from 'react-bootstrap';
import {Button, Modal, Container} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";

const CreateProduct = ({show, onHide}) =>{
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
            <Form>
                <Form.Control
                    placeholder={"Введите название типа"}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
          <Button variant="outline-success" onClick={onHide}>Добавить</Button>
        </Modal.Footer>
      </Modal>

    );
};


export default CreateProduct;