import React from 'react';
import './App.css';

import Button from'./components/styleEstilos';


function App() {
  
  return (
    <div className="App">
      <div className="titulo principal"> 
      <h1>Guia de Metodos Crud</h1>
      <img className="danielfoto" alt="foto do Daniel pixel" src={require('./components/pixel-art-guy-hyper.PNG')} ></img>
      <h2>Menu de Opcoes</h2>
        <a href='funcionario'><Button><b>Listar Funcionários</b></Button></a>
        <a href='buscafuncionario'><Button><b>Listar Funcionário Por ID</b></Button></a>
        <a href='adicionaFuncionario'><Button><b>Adicionar Funcionário</b></Button></a>
        <a href='atualizaFuncionario'><Button><b>Atualizar Funcionario</b></Button></a>
        <a href='deletaFuncionario'><Button><b>Deletar Funcionario</b></Button></a>
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
