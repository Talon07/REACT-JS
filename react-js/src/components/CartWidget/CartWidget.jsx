import React from "react";
import style from "./CartWidget.module.css";

function CartWidget() {
  return (
    <div>
      <img className={style.cart} src="./src/assets/cart2.svg" alt="" />0
    </div>
  );
}

export default CartWidget;
