import React from 'react';
import '../App.css';

function Pag404() {
  return (
    <div className="App">
      <h1>Erro 404 </h1>
      <p>Ocorreu um problema ao carregar a pagina</p>
      <img src={require('./robo.jpg')} alt="imagem" height="500px"></img>
    </div>
  );
}

export default Pag404;