import React from "react";
import style from "./ItemListContainer.module.css";

function ItemListContainer(props) {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <h3>{props.nombre}</h3>
      </div>
      <div className={style.box}>
        <h3>{props.nombre}</h3>
      </div>
      <div className={style.box}>
        <h3>{props.nombre}</h3>
      </div>
    </div>
  );
}

export default ItemListContainer;
