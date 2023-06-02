import { observer } from "mobx-react-lite";

export const CardDetails = observer(({ param = {} }) => {
  const pathToImage = `http://localhost:5000/images/${param.img}`;

  return (
    <div>
      <span className={"discription"}>{param.description}</span>
      <span className={"price"}>Стоимость </span>
      <span className={"price_num"}>{param.price}P</span>
      <span className={"size"}>Размер </span>
      <span className={"size_num"}>{param.size}</span>
      {/* <img
        className={"img_main"}
        style={{ width: "300px", height: "498px" }}
        src={pathToImage}
        alt="imageProduct"
      /> */}
    </div>
  );
});
