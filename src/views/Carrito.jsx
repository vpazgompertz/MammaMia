import React, { useContext } from "react";
import { PizzaContext } from "../context/MyContext";
import { Container, Button, Table } from "react-bootstrap";

const Carrito = () => {
  const { cart, updateQuantity } = useContext(PizzaContext);

  const totalPizza = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container className="carrito mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="title-carrito">Detalle del pedido</h3>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "100px", marginRight: "10px" }}
                />
                <strong>{item.name}</strong>
              </td>
              <td>${item.price * item.quantity}</td>
              <td>
                <div>
                  <Button
                    variant="danger"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="primary"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <h2>Total: ${totalPizza}</h2>
              <Button variant="success">Ir a pagar</Button>
            </td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
};

export default Carrito;
