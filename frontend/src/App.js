import React from 'react';

import './App.css';
/*Parei em 45 minutos e tenho que adicionar o cors no backend yarn add cors */
import logo from './assets/logo.svg';

import Routes from './routes';

function App() {
  //valor inicial do useState é vazio para depois pegar os email inseridos no input
  //o campo email no vetor recebe o ultimo valor atualizado e setEmail atualiza os valores
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />
     
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
