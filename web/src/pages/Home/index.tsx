import React from 'react';
import logo from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import  './styles.css';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
        <img src={logo} alt="Ecoleta"/>
        </header>

        <main>
          <h1>Aumente suas vendas ou seriços na plataforma online ou   </h1>
          <p>Cadastre-se e seja visto .</p>

          <Link to="/create-point">
            <span>
            <FiLogIn/>    
            </span>
            <strong>Cadastre seu comércio</strong>
          </Link>
        </main>
       
      </div>
    </div>

  )
}

export default Home;