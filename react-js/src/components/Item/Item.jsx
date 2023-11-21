import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, img, category, precio, stock }) => {
  return (
    <div className="ContainerCard">
      <article className="CardItem">
        <header className="Header">
          <h2 className="ItemHeader">{nombre}</h2>
        </header>
        <div>
          <img src={img} alt={nombre} className="ItemImg" />
        </div>
        <section>
          <p className="Info">Precio: ${precio}</p>
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
