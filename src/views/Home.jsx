import React from 'react';
import principal from '../assets/img/pizza_principal.jpg'; 
import Catalogo from '../components/Catalogo';

const Home = () => {
    return (
      <div className='container-home'>
        <div className="container-img">
            <img className="image" src={principal} alt="Imagen" />
            <div className="title">
              <h1>¡Pizzería Mamma Mia!</h1>
              <p>!Tenemos las mejores pizzas que podrás encontrar!</p>
            </div>
        </div>
        <Catalogo/>
      </div>
    );
}

export default Home;
