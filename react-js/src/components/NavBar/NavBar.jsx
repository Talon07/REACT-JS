import React from "react";
import style from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <Link to="/">PIXEL</Link>
        <img className={style.logo1} src="./src/assets/logo1.svg" alt="" />
      </div>
      <div className={style.buttons}>
        <NavLink
          to={"/category/celulares"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Celulares
        </NavLink>
        <NavLink
          to={"/category/computadoras"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          NoteBooks
        </NavLink>
        <NavLink
          to={"/category/auriculares"}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Auriculares
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
