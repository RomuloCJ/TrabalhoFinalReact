import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GetProduct from './Product/GetProduct'
import GetProductId from './Product/GetProductId'
import GetProductIdFoto from './Product/GetProductIdFoto'
import GetCategoria from './Categoria/GetCategoria'
import GetCategoriaId from './Categoria/GetCategoriaId'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import PostProduct from './Product/PostProduct';
import PostCliente from './Cliente/PostCliente';
import PostCategoria from './Categoria/PostCategoria';
import GetCliente from './Cliente/GetCliente';
import GetClienteId from './Cliente/GetClienteId';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/produto" exact={true} component ={GetProduct} />
      <Route path="/produto/:id" exact={true} component ={GetProductId} />
      <Route path="/produto/foto/:id" exact={true} component ={GetProductIdFoto} />
      <Route path="/produtoadicionar" exact={true} component ={PostProduct} />
      <Route path="/categoria" exact={true} component ={GetCategoria} />
      <Route path="/categoria/:id" exact={true} component ={GetCategoriaId} />
      <Route path="/categoriaadicionar" exact={true} component ={PostCategoria} />
      <Route path="/cliente" exact={true} component ={GetCliente} />
      <Route path="/cliente/:id" exact={true} component ={GetClienteId} />
      <Route path="/clienteadicionar" exact={true} component ={PostCliente} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
