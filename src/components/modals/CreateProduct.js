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
          <Form.Select aria-label="Default select example">
          <option>Выбери тип товара</option>
          <option value="1">Юбки</option>
          <option value="2">Платья</option>
          <option value="3">Брюки</option>
          <option value="4">Обувь</option>
          <option value="5">Спортивная одежда</option>
        </Form.Select> 
        <Form>
            <Form.Control
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={"Введите название типа"}
            />
        </Form>
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