import React, { useState } from "react";
import "./PriceSlider.css";

const PriceSlider = () => {
  const [Price, setPrice] = useState();

  const handleMinPriceChange = (event) => {
    setPrice(Number(event.target.value));
  };

  return (
    <div>
      <label htmlFor="minPrice" className="PriceSlider">
        Укажите цену:
      </label>
      <input
        className="PriceSlider"
        type="range"
        id="setPrice"
        min={0}
        max={10000}
        value={Price}
        onChange={handleMinPriceChange}
        color="black"
        aria-controls="black"
      />
      <span className="PriceSlider">{Price}</span>
    </div>
  );
};

export default PriceSlider;
