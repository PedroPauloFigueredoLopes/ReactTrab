import React,{useState, useEffect} from 'react';
import '../App.css';
import Button from '../components/styleEstilos';
import api from '../Services/api.js';


function Func() {
    
      const[data,setData] = useState([])
  
      useEffect(() =>{
        api.get('/funcionario').then(response =>{
          setData(response.data);
          console.log(response.data)
        })
      },[])
    

        return (
            <div>
                <div className="App">
                  <div className="titulo principal">
                      <br></br>
                      <h1>Lista de Funcionarios</h1>
                        <p><b>Voltar ao menu</b></p>
                      <a href='/'><Button>Menu</Button></a>
                  </div>
                <div>
                </div>
                <table className="container lista">
                    {data.map(dat => (
                      <tr>
                        <th  key={dat.id}>
                           id: {dat.id}  -  Nome: {dat.nome}  -  Cpf: {dat.cpf}
                        </th>
                      </tr>  
                    ))}
                </table>
                  <h3>Fim da lista</h3>
                  <hr className="container"></hr>
                  
                  <p><b>Voltar ao menu</b></p>
                  <a href='/'><Button>Menu</Button></a>
                </div>
                
            </div>
        );
    
  }

export default Func;

