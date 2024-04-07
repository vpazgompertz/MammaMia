import React, { useContext } from "react";
import { PizzaContext } from "../context/MyContext";
import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const Pizzas = () => {
  const { pizzaData, addPizzaCart } = useContext(PizzaContext);
  const { id } = useParams();

  const pizzaSelected = pizzaData.find(
    (pizzaItem) => pizzaItem.id.toString() === id
  );

  if (!pizzaSelected) {
    return <div>No hay pizzas disponibles</div>;
  }

  const handleAddCart = () => {
    addPizzaCart(pizzaSelected);
  };

  return (
    <Container className="details">
      <div className="pizza">
        <img
          src={pizzaSelected.img}
          alt={pizzaSelected.name}
          className="pizza-image"
        />
        <div className="info">
          <h1>{pizzaSelected.name}</h1>
          <div className="divider"></div>
          <p>{pizzaSelected.desc}</p>
          <p>Ingredientes:</p>
          <ul>
            {pizzaSelected.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <p className="price">Precio: ${pizzaSelected.price}</p>
            <Button className="btn btn-danger" onClick={handleAddCart}>
              Añadir al carrito
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Pizzas;
