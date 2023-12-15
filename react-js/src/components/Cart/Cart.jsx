import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import React from "react";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
  if (totalQuantity === 0) {
    return (
      <div>
        <h1>Aún no has agregado productos al carrito</h1>
        <Link to="/" className="Option">
          Ver productos
        </Link>
      </div>
    );
  }
  return (
    <div className="Cart">
      <h1>Carrito</h1>
      {cart.map((p) => (
        <React.Fragment key={p.id}>
          <CartItem {...p} />
        </React.Fragment>
      ))}
      <h3>Total: ${total}</h3>
      <div className="Buttons">
        <button onClick={() => clearCart()} className="Option">
          Vaciar carrito
        </button>
        <Link to="/checkout" className="CheckOut">
          Finalizar Compra
        </Link>
        <Link to="/" className="Option">
          Ver mas productos
        </Link>
      </div>
    </div>
  );
};

export default Cart;
