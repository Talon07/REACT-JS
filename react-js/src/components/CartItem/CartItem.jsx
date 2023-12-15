import "./CartItem.css";

const CartItem = ({ id, title, image, category, price, total, quantity }) => {
  return (
    <div className="CartCard">
      <article className="CardItem">
        <header className="Header">
          <h2 className="ItemHeader">{title}</h2>
        </header>
        <div>
          <img src={image} alt={title} className="ItemImg" />
        </div>
        <section>
          <p className="Info">Precio por unidad: ${price}</p>
          <p className="Info">Total productos: {quantity}</p>
        </section>
      </article>
    </div>
  );
};

export default CartItem;
