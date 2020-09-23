import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Func from './Repository/funcionario';
import Funcid from './Repository/funcid';
import Pag404 from './components/pagina404';
import FuncAdd from './Repository/funcAdd';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path="/" exact={true} component={App} />
  <Route path="/funcionario" exact={true} component={Func} />
  <Route path="/buscafuncionario/" component={Funcid} />
  <Route path="/adicionaFuncionario" component={FuncAdd} />
  <Route path='*' component={Pag404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
