import React,{Component, useState, useEffect} from 'react';
import './App.css';

import Button from'./components/styleEstilos';


function App() {
  
  return (
    <div className="App">
      <div className="titulo principal"> 
      <h1>Daniel Tutoriais</h1>
      <img className="danielfoto" src={require('./components/pixel-art-guy-hyper.PNG')}></img>
      <h2>Menu de Opções</h2>
        <a href='funcionario'><Button>Listar Funcionários</Button></a>
        <a href='buscafuncionario'><Button>Listar Funcionário Por ID</Button></a>
        <a href='adicionaFuncionario'><Button>Adicionar Funcionário</Button></a>
        <a href='funcionario'><Button>Atualizar Funcionario</Button></a>
        <a href='funcionario'><Button>Deletar Funcionario</Button></a>
      </div>
      
        <div className="menutexto container">
          <h2>O método GET</h2>
          <p>O método GET é usado para recuperar dados do servidor. Este é um método somente leitura, portanto, 
            não há risco de mutação ou corrupção dos dados. 
            Por exemplo, se chamarmos o método get em nossa API, 
            obteremos uma lista de todas as tarefas a fazer.</p>

          <h2> O método POST </h2>
            <p> O método POST envia dados ao servidor e cria um novo recurso.
            O recurso que ele cria está subordinado a algum outro recurso pai.
            Quando um novo recurso é POSTADO para o pai, o serviço de API associa automaticamente o novo recurso
            atribuindo a ele um ID (novo URI de recurso).
            Resumindo, este método é usado para criar uma nova entrada de dados. </p>

          <h2> O método PUT </h2>
            <p> O método PUT é mais frequentemente usado para atualizar um recurso existente. Se você deseja atualizar um recurso específico
            (que vem com um URI específico), você pode chamar o método PUT para esse URI de recurso com o corpo da solicitação
            contendo a nova versão completa do recurso que você está tentando atualizar. </p>
           <h2> O método DELETE </h2>
           
          <p> O método DELETE é usado para excluir um recurso especificado por seu URI. </p>
        </div>

           
    </div>
      


  );
}

export default App;
