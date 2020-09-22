import React,{useState, useEffect} from 'react';
import '../App.css';
import styled from 'styled-components';
import api from '../Services/api.js';
import { render } from '@testing-library/react';

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
function FuncAdd() {

    const[data,setData] = useState([])
    const[id,setId] = useState('')
    var idTemp = 0
    useEffect(() => {
       api.post(`/funcionario/${id}`)
    
      .then(response => {
        console.log(response)
        setData(response.data);
      
      })
      .catch (error => {
        console.log(error)
        alert ("Usuario não encontrado");
      
      })
  
    },[id])
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setId(idTemp)
   
    }
  
    const handleChange = (e) => {
      idTemp =e.target.value
      console.log(idTemp)
    }
  
    return (
      <div>
           <div className="App">
              <br></br>
              <Button  href='/'>Menu</Button>
              <div>
                <form onSubmit= {handleSubmit}>
                  <h2 for="buscador">Buscar funcionário por ID</h2>
                  <input type="text" onChange = {handleChange} id="id" name="id" inclinename="buscaId" placeholder="Inserir o numero do ID"/>
                  <button type='submit'> Pesquisar </button>
                </form>
              </div>
              <h1>
                {data.nome}
              </h1>
              <h2>{data.cpf}</h2>
          </div>
      </div>
    );
  }
  
  export default FuncAdd;
  
  
  