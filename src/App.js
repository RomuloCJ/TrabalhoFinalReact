import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Link to="/produto/">Ver Produtos</Link>
    <Link to="/produtoadicionar"> Adicionar Produto</Link>
    </div>
  );
}

export default App;
