import React,{Component, useState, useEffect} from 'react';
import '../App.css';
import styled from 'styled-components';
import api from '../api/api.js';

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

function AddFunc() {
    
      const[data,setData] = useState([])
  
      useEffect(() =>{
        api.get(`/funcionario`).then(response =>{
          setData(response.data);
        })
      },[])
    

        return (
            <div>
                <div className="App">
                    <br></br>
                    <Button  href='/'>Menu</Button>
                </div>
                <ul>
                    {data.map(dat => (
                        <li  key={dat.id}>
                           id:{dat.id} | Nome: {dat.nome} | Cpf: {dat.cpf}
                        </li>
                    ))}
                </ul>
                
            </div>
        );
    
  }

export default AddFunc;
