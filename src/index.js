import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Func from './Repository/funcionario';
import Funcid from './Repository/funcid';
import Pag404 from './components/pagina404';
import FuncAdd from './Repository/funcAdd';
import FuncDel from './Repository/funcDel';
import FuncAtual from './Repository/funcAtual';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path="/" exact={true} component={App} />
  <Route path="/funcionario" exact={true} component={Func} />
  <Route path="/buscafuncionario/" component={Funcid} />
  <Route path="/adicionaFuncionario" component={FuncAdd} />
  <Route path="/atualizaFuncionario" component={FuncAtual} />
  <Route path="/deletaFuncionario" component={FuncDel} />
  <Route path='*' component={Pag404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
  );

serviceWorker.unregister();
