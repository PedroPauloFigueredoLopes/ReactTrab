import React,{Component, useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';

const Button = styled.a`
text-decoration: none;
cursor: pointer;
background: transparent;
font-size: 16px;
border-radius: 3px;
color: Black;
border: 2px solid Navy;
margin: 0 1em;
padding: 0.50em 1em;
transition: 0.5s all ease-out;
&:hover {
background-color: Blue;
color: white;
}`

function App() {

  return (
    <div className="App">
      <h1>Menu</h1>
        <Button href='funcionario'>Listar Funcionários</Button>
        <Button href='/'>Adicionar Funcionário</Button>
        <Button href='buscafuncionario'>Listar Funcionário Por ID</Button>
        <Button href='/'>Atualizar Funcionario</Button>
        <Button href='/'>Deletar Funcionario</Button>
    </div>
  );
}

export default App;
