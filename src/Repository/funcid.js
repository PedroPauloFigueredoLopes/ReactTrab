import React,{useState, useEffect} from 'react';
import '../App.css';
import Button,{ButtonSubmit} from '../components/styleEstilos';
import api from '../Services/api.js';

function Funcid() {

  const[data,setData] = useState([])
  const[id,setId] = useState('')
  var idTemp = 0
  useEffect(() => {
     api.get(`/funcionario/${id}`)
  
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
      <div className="App">
         <div className="titulo principal">
            <h2>Buscar funcionario por ID</h2>
              <p><b>Voltar ao menu</b></p>
              <a href='/'><Button><b>Menu</b></Button></a>
          </div>
            <div className="pesquisa"> 
              <form  onSubmit= {handleSubmit}>
                <label><h2>Digite um ID</h2></label>
                <label>Para encontrar o nome e cpf</label><br></br><br></br>
                <input type="text" onChange = {handleChange} id="id" name="id" inclinename="buscaId" placeholder="Inserir o numero do ID"/>
                <ButtonSubmit type='submit'> Pesquisar </ButtonSubmit>
              </form>
            
            <div className="container itempesquisado">
              <h2>{data.nome}</h2>
              <h3>{data.cpf}</h3>
            </div>
          </div>
        </div>

  );
}

export default Funcid;
