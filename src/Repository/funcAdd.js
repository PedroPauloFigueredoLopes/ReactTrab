import React,{useState,Component, useEffect} from 'react';
import '../App.css';
import styled from 'styled-components';
import api from '../Services/api.js';
import { render } from '@testing-library/react';
import axios from 'axios';

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

// class FuncAdd extends Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
//             id: '',
//             nome: '',
//             cpf: '',
// 		}
// 	}

// 	changeHandler = e => {
// 		this.setState({ [e.target.name]: e.target.value })
// 	}

// 	submitHandler = e => {
// 		e.preventDefault()
// 		console.log(this.state)
// 		api.post('/funcionario/')
// 			.then(response => {
// 				console.log(response)
// 			})
// 			.catch(error => {
// 				console.log(error)
// 			})
// 	}

// 	render() {
// 		const { id,nome,cpf} = this.state
// 		return (
// 			<div>
//                  <Button  href='/'>Menu</Button>
// 				<form onSubmit={this.submitHandler}>
//                 <div>
// 						<input
// 							type="text"
// 							name="id"
// 							value={id}
// 							onChange={this.changeHandler}
// 						/>
// 					</div>
                    
// 					<div>
// 						<input
// 							type="text"
// 							name="nome"
// 							value={nome}
// 							onChange={this.changeHandler}
// 						/>
// 					</div>
//                     <div>
// 						<input
// 							type="text"
// 							name="cpf"
// 							value={cpf}
// 							onChange={this.changeHandler}
// 						/>
// 					</div>
					
// 					<button type="submit">Submit</button>
// 				</form>
// 			</div>
// 		)
//     }
// }
// export default FuncAdd;







//SEGUNDO CODIGO USANDO FUNCION


function FuncAdd() {
    const[data,setData] = useState([])
    const[cpf,setCpf] = useState('')
    const[nome,setNome] = useState('')
    const[funcionario,setFuncionario] = useState()
    var idTemp = 0
    var cpfTemp = 0
    var nomeTemp = 0
    useEffect(() => {
      const headers = {
        'Content-Type': 'application/json; charset=UTF-8',
      }
      console.log(funcionario)
      if(funcionario!=null){
        api.post(`/funcionario`,funcionario,{headers:headers})
      
        .then(response => {
          console.log(response)
          setData(response.data);
          alert ("Usuario cadastrado com sucesso");
        
        })
        .catch (error => {
          console.log(error)
          alert ("Não foi possivel cadastrar");
        
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
  
    // const changeHandlerCpf = e => {
    //     cpfTemp = ({ [e.target.cpf]: e.target.value })
    //     console.log(cpfTemp)    
    // }
    // const changeHandlerId = e => {
    //     idTemp = ({ [e.target.id]: e.target.value })
    //     console.log(idTemp)   
    // }
    // const changeHandlerNome = e => {
    //     nomeTemp = ({ [e.target.nome]: e.target.value })
    //     console.log(nomeTemp)        
    // }
    
    return (
      <div>
           <div className="App">
              <br></br>
              <Button  href='/'>Menu</Button>
              <div>
                <form onSubmit={submitHandler}>
                                  
                  <input type="text" name="nome" onChange={e =>setNome(e.target.value)} value={nome} 
                    placeholder="Inserir o nome do funcionario"/>
          
                  <input type="text" name="cpf" cpf ="cpf" onChange={e =>setCpf(e.target.value)} value={cpf}
                    placeholder="Inserir o numero do CPF"/>

                  <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
      </div>
    );
  }
  export default FuncAdd;
