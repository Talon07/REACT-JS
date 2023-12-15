import "./CheckOutForm.css";
import { useState } from "react";

const CheckOutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div className="Container">
      <form onSubmit={handleConfirm} className="Form">
        <label className="Label">
          Nombre y Apellido :
          <input
            type="text"
            className="Input"
            required
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className="Label">
          Telefono :
          <input
            type="text"
            value={phone}
            required
            className="Input"
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className="Label">
          Email :
          <input
            type="text"
            className="Input"
            value={email}
            required
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <div className="Label">
          <button type="submit" className="CreateOrder">
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOutForm;
