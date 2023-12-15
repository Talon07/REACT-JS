import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/ShopContext";

const ItemDetail = ({ id, title, image, category, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      title,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <article className="CardDetail">
      <header>
        <h2>{title}</h2>
      </header>
      <picture>
        <img src={image} alt={title} className="ItemImg" />
      </picture>
      <section>
        <p>Categoria: {category}</p>
        <p>Precio: ${price}</p>
      </section>
      <footer>
        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
      </footer>
    </article>
  );
};

export default ItemDetail;
