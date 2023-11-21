import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, nombre, img, category, precio, stock }) => {
  return (
    <article className="CardDetail">
      <header>
        <h2>{nombre}</h2>
      </header>
      <picture>
        <img src={img} alt={nombre} className="ItemImg" />
      </picture>
      <section>
        <p>Nombre: {nombre} </p>
        <p>Categoria: {category}</p>
        <p>Precio: ${precio}</p>
      </section>
      <footer>
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
