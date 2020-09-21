import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Func from './components/funcionario.js';
import Funcid from './components/funcid.js';
import Pag404 from './components/pagina404.js'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path="/" exact={true} component={App} />
  <Route path="/funcionario" exact={true} component={Func} />
  <Route path="/buscafuncionario/" component={Funcid} />
  <Route path='*' component={Pag404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
