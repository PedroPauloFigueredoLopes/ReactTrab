import React, { useState, useEffect } from 'react'
import api from '../Services/api.js';
import '../App.css';
import Button from '../components/styleEstilos';

const FuncDel = () => {
    const [funcionario, setFuncionario] = useState([]) 
      useEffect(() => {getData()},
      [])
    const getData = async () => {const response = await api.get('/funcionario')
        setFuncionario(response.data)}

    const removeData = (id) => {api.delete(`/funcionario/${id}`).then(res => {  
        const del = funcionario.filter(funcionario => id !== funcionario.id)
        setFuncionario(del)}) 
    } 

    const renderHeader = () => {let headerElement = ['id', 'nome', 'cpf'] 
         return headerElement.map((key, index) => { 
            return <th key={index}>{key.toUpperCase()}</th>
        })   
    }
    const renderBody = () => {
        return funcionario && funcionario.map(({ id, nome, cpf }) => {return (
                <tr key={id}>
                    <td>{id}</td> 
                    <td>{nome}</td>
                    <td>{cpf}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(id)}>Delete</button> 
                    </td>  
                </tr>
         )}) 
    }
    return ( 
        <>
        <div className="App">
            <div className="titulo principal">
              <h2>Deletar Funcionarios</h2>
                <p><b>Voltar ao menu</b></p>
                <a href='/'><Button><b>Menu</b></Button></a>
            </div>
                <div className="container listadeleta">
                <table id='funcionario'>    
                    <thead><tr>{renderHeader()}</tr></thead>
                    <tbody>{renderBody()}</tbody> 
                </table>
            </div>
        </div>
        </>)
}
export default FuncDel 
