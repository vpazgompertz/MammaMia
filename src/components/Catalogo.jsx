import React, { useContext } from "react";
import { PizzaContext } from "../context/MyContext";
import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Catalogo = () => {
  const { pizzaData, addPizzaCart } = useContext(PizzaContext);
  const navigate = useNavigate();

  const handleDetails = (pizzaId) => {
    navigate(`/pizza/${pizzaId}`);
  };

  const handleAddCart = (pizzaItem) => {
    addPizzaCart(pizzaItem);
  };

  if (!Array.isArray(pizzaData) || pizzaData.length === 0) {
    return <div>No hay pizzas disponibles</div>;
  }

  return (
    <Container fluid className="card-container">
      {pizzaData.map((pizzaItem) => (
        <Card key={pizzaItem.id} className="card">
          <img variant="top" src={pizzaItem.img} alt={pizzaItem.name} />
          <Card.Body>
            <h5>{pizzaItem.name}</h5>
            <div className="divider"></div>
            <ul>
              {pizzaItem.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>${pizzaItem.price}</p>
            <div className="divider"></div>
            <div className="text-center">
              <Button
                variant="primary"
                style={{ marginRight: "10px" }}
                onClick={() => handleDetails(pizzaItem.id)}
              >
                Ver más
              </Button>
              <Button
                variant="danger"
                style={{ marginLeft: "10px" }}
                onClick={() => handleAddCart(pizzaItem)}
              >
                Añadir
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Catalogo;
