import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GetProduct from './Product/GetProduct'
import ProdutosCat from './Product/ProdutosCat'
import GetProductId from './Product/GetProductId'
import GetCategoria from './Categoria/GetCategoria'
import GetCliente from './Cliente/GetCliente'
import GetClienteId from './Cliente/GetClienteId'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/produto" exact={true} component ={GetProduct} />
      <Route path="/produto/:id" exact={true} component ={GetProductId} />
      <Route path="/categoria" exact={true} component ={GetCategoria} />
      <Route path="/produtoscat/:id" exact={true} component ={ProdutosCat} />
      <Route path="/cliente" exact={true} component ={GetCliente} />
      <Route path="/cliente/:id" exact={true} component ={GetClienteId} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
