import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <h2>Produtos</h2>
    <div>
    <Link to="/produto/">Ver Produtos</Link>
    </div>
    <div>
    <Link to="/produtoadicionar"> Adicionar Produto</Link>
    </div>
    <h2>Categoria</h2>
    <div>
    <Link to="/categoria/">Ver Categorias</Link>
    </div>
    <div>
    <Link to="/categoriaadicionar/">Adicionar Categoria</Link>
    </div>
    <h2>Cliente</h2>
    <div>
    <Link to="/cliente/">Ver Cliente</Link>
    </div>
    <div>
    <Link to="/clietenadicionar/">Adicionar Cliente</Link>
    </div>

    </div>
  );
}

export default App;
