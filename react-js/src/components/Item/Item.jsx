import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, title, image, category, price, stock }) => {
  return (
    <div className="ContainerCard">
      <article className="CardItem">
        <header className="Header">
          <h2 className="ItemHeader">{title}</h2>
        </header>
        <div>
          <img src={image} alt={title} className="ItemImg" />
        </div>
        <section>
          <p className="Info">Precio: ${price}</p>
          <p className="Info">Stock Disponible: {stock}</p>
        </section>
        <footer className="ItemFooter">
          <Link to={`/item/${id}`} className="Option">
            Ver Detalle
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default Item;
