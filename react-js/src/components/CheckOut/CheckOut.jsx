import React, { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../../context/ShopContext";
import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../firebase/client";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

const CheckOut = () => {
  const [loading, setLoading] = useState(false);
  const { cart, total, clearCart, setOrderId, setError } =
    useContext(CartContext);

  const setOrderIdRef = useRef();

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    console.log(CheckOut);

    try {
      if (!name || !phone || !email) {
        setError("Por favor, complete todos los campos requeridos.");
        return;
      }

      const objOrder = {
        buyer: { name, phone, email },
        items: cart.map(({ id, name, price, quantity }) => ({
          id,
          name: name || "Nombre no disponible",
          price,
          quantity,
        })),
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];

      const productsRef = collection(db, "products");
      const productsSnapshot = await getDocs(productsRef);

      productsSnapshot.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity || 0;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderIdRef.current = orderAdded.id;
        clearCart();
      } else {
        setError("Algunos productos están fuera de stock.");
      }
    } catch (error) {
      console.error("Error al crear la orden:", error);
      setError("Hubo un error al procesar la orden.");
    } finally {
      setLoading(false);
    }
  };

  if (setOrderIdRef.current) {
    return <h1>El ID de su orden es: {setOrderIdRef.current}</h1>;
  }

  return (
    <div>
      <h1>CheckOut</h1>
      <CheckOutForm onConfirm={createOrder} />
    </div>
  );
};

export default CheckOut;
