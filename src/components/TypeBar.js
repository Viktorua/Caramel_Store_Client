import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "../components/catalog/catalog.styles.css";
import { Form } from "react-bootstrap";
import { Button, Row, Container } from "react-bootstrap";
import PriceSlider from "./PriceSlider";

const colors = [
  "черный",
  "белый",
  "красный",
  "синий",
  "желтый",
  "оранжевый",
  "зеленый",
  "розовый",
  "фиолетовый",
];

const TypeBar = observer(() => {
  const { product } = useContext(Context);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [style, setStyle] = useState("");
  return (
    <ListGroup className="TypeBar">
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => setColor(e.target.value)}
      >
        <option>Укажите цвет</option>
        {colors.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => setSize(e.target.value)}
        className={"product"}
      >
        <option>Укажите размер</option>
        <option value="40">40</option>
        <option value="42">42</option>
        <option value="44">44</option>
        <option value="46">46</option>
        <option value="48">48</option>
        <option value="50">50</option>
        <option value="52">52</option>
        <option value="54">54</option>
        <option value="56">56</option>
      </Form.Select>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => setStyle(e.target.value)}
        className={"product"}
      >
        <option>Укажите стиль</option>
        <option value="Повседневная">Повседневная</option>
        <option value="Праздничная">Праздничная</option>
      </Form.Select>
      <Container>
        <Row className="Product">
          <PriceSlider />
        </Row>
      </Container>
      <Button className="mt-5" variant={"btn btn-dark"}>
        Применить
      </Button>
    </ListGroup>
  );
});

export default TypeBar;
