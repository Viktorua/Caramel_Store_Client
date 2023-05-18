import React, { useState } from "react";
import Products from "../components/products/Products";
import Cart from "./Cart";

const Store = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 65, name: "Товар 1", price: 10 },
    { id: 64, name: "Товар 2", price: 20 },
    { id: 52, name: "Товар 3", price: 30 },
  ];

  return (
    <div>
      <h1>Интернет-магазин</h1>
      <div>
        {products.map((product) => (
          <Products
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Store;
