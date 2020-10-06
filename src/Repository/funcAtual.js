import React,{useState, useEffect} from 'react';
import '../App.css';
import api from '../Services/api.js';
import Button,{ButtonSubmit} from '../components/styleEstilos';


function FuncAtual() {
    const[data,setData] = useState([])
    const[id,setId] = useState('')
    const[cpf,setCpf] = useState('')
    const[nome,setNome] = useState('')
    const[funcionario,setFuncionario] = useState(null)

    useEffect(() => {
      const headers = {
        'Content-Type': 'application/json; charset=UTF-8',
      }
      
      console.log(funcionario)
      if(funcionario!==null && id!==undefined){
        api.put(`/funcionario/${id}`,funcionario,{headers:headers})
      
        .then(response => {
          console.log(response)
          setData(response.data);
          alert ("Usuario atualizado com sucesso");
        
        })
        .catch (error => {
          console.log(error)
          alert ("Não foi possivel atualizar");
        
        })
     }
  
    },[funcionario])
  
    const submitHandler = (e) => {
      e.preventDefault()
      const funcionario={ 
        cpf: cpf,
        nome: nome
      }
      setFuncionario(funcionario)
        console.log()
    }
    
    return (
      <div>
           <div className="App">
            <div className="titulo principal">
              <h2>Atualizar Funcionarios</h2>
                <p><b>Voltar ao menu</b></p>
                <a href='/'><Button><b>Menu</b></Button></a>
          </div>
            <div className="formularios">
                <form onSubmit={submitHandler}>

                <div>
                    <h3>Escolha o id do funcionario</h3>              
                    <input type="text" name="id" onChange={e =>setId(e.target.value)} value={id} 
                      placeholder="id do funcionario"/>
                </div>
                <div>
                    <h3>Adicionar o novo nome do funcionario</h3>              
                    <input type="text" name="nome" onChange={e =>setNome(e.target.value)} value={nome} 
                      placeholder="Nome Sobrenome"/>
                </div>
                <div>
                    <h3>Adicionar o novo cpf do funcionario</h3>
                    <input type="text" name="cpf" cpf ="cpf" onChange={e =>setCpf(e.target.value)} value={cpf}
                      placeholder="11122233344"/>
                </div>
                    <ButtonSubmit type='submit'>Adicionar</ButtonSubmit>
              </form>
            </div>
          </div>
      </div>
    );
  }
  export default FuncAtual;
