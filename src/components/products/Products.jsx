import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import "./products.styles.css";
import { Context } from "../../index";
import { toJS } from "mobx";
import { useState } from "react";
import axios from "axios";
import instance from "../Instance";

const ProductsContent = ({ param }) => {
  const { pathname } = useLocation();
  const { basket } = useContext(Context);
  const { user } = useContext(Context);
  const [isAddFavorite, setIsAddFavorite] = useState(false);

  console.log("user", toJS(user));

  const isButtonDisabled = pathname.includes("basket");

  const buttonClassName = `products__pair__item__content__button ${
    isAddFavorite ? "addToFavorite" : ""
  }`;

  const pathToImage = `http://localhost:5000/images/${param.img}`;

  const handleAddToCart = async () => {
    const {
      _user: { id },
    } = user;

    console.log("param", param);

    const { type, description, size, price, img, style, color } = param;

    // запрос на сохранения товара в баскет по id
    try {
      const formData = new FormData();
      formData.append("image", img);
      formData.append("type", type);
      formData.append("description", description);
      formData.append("size", size);
      formData.append("price", price);
      formData.append("style", style);
      formData.append("color", color);
      formData.append("userId", id);
      formData.append("clotheId", param.id);

      const { data } = await axios.post(
        "http://localhost:5000/api/basket/add",
        {
          type,
          description,
          size,
          price,
          img,
          style,
          color,
          image: img,
          userId: id,
          clotheId: param.id,
        }
      );

      console.log(data);
    } catch (e) {
      console.error(e);
    }

    // basket.setNewProduct(param);
    // setIsAddFavorite(true);
  };

  useEffect(() => {
    if (isAddFavorite) {
      setTimeout(() => setIsAddFavorite(false), 2000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddFavorite]);

  return (
    <div className={"products__pair__item__content"}>
      <span className={"discription"}>{param.description}</span>
      <span className={"price"}>Стоимость </span>
      <span className={"price_num"}>{param.price}P</span>
      <span className={"size"}>Размер </span>
      <span className={"size_num"}>{param.size}</span>

      {!isButtonDisabled && (
        <button
          className={buttonClassName}
          variant="btn btn-dark"
          onClick={handleAddToCart}
        >
          {isAddFavorite ? "Добавлено" : "В корзину"}
        </button>
      )}

      <span>
        <img
          className={"img_main"}
          style={{ width: "300px", height: "500px" }}
          src={pathToImage}
        />
      </span>
    </div>
  );
};

export const CartProduct = ({ data = [] }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
      }}
    >
      {data.map((item) => (
        <div className={"products__pair__item"} key={item.id}>
          <ProductsContent param={item} />
        </div>
      ))}
    </div>
  );
};

export default function Products(props) {
  const { data } = props;

  return (
    <div className="products">
      <div className="products__pair">
        {data.map((value) => (
          <div className={"products__pair__item"} key={value.id}>
            <ProductsContent param={value} />
          </div>
        ))}
      </div>
    </div>
  );
}
