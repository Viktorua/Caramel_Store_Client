import React from "react";
import "./basket.css";
import { useNavigate } from "react-router";
import { CartProduct } from "../components/products/Products";
import { useContext } from "react";
import { Context } from "..";
import { toJS } from "mobx";
import { useEffect } from "react";
import axios from "axios";

const data = [
  {
    color: "зелёный",
    createdAt: "2023-05-15T14:36:31.000Z",
    description: "дюддд тттт ииии мммм сссссс,dxdxdddszzd",
    id: 64,
    img: "6.1.jpg",
    name: null,
    price: 800,
    size: 56,
    style: "Повседневная",
    type: "Юбки",
    updatedAt: "2023-05-15T14:36:31.000Z",
  },
];

export default function Basket() {
  const { basket } = useContext(Context);
  const { user } = useContext(Context);

  const navigate = useNavigate();

  const changeRoute = (url) => {
    if (url) {
      navigate(`/${url}`);
    } else {
      navigate("/");
    }
  };

  const fetchBasket = async () => {
    const { data } = await axios.get("http://localhost:5000/api/basket/", {
      userId: user._user.id,
    });

    console.log(data);
  };

  useEffect(() => {
    fetchBasket();
  }, []);

  return <CartProduct data={basket._basket} />;
}
