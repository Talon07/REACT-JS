import { useContext, useState } from "react";
import style from "./CartWidget.module.css";
import { CartContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className={style.cartWidget}>
      <img
        className={style.cart}
        src="./src/assets/cart2.svg"
        alt="cart-widget"
      />
      <span
        className={style.total}
        style={{ display: totalQuantity > 0 ? "block" : "none" }}
      >
        {totalQuantity}
      </span>
    </Link>
  );
};

export default CartWidget;
