import React from "react";
import style from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <h1>PIXEL</h1>
        <img className={style.logo1} src="./logo1.svg" alt="" />
      </div>
      <div className={style.buttons}>
        <button>Inicio</button>
        <button>Productos</button>
        <button>Contacto</button>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
