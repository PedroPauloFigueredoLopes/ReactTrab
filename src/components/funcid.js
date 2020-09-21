import React,{useState, useEffect} from 'react';
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

function Funcid() {
   // const DashBoard = () =>{
      const[data,setData] = useState([])
  
      useEffect(() =>{
        api.get(`/funcionario/{id}`).then(response =>{
          setData(response.data);
        })
      },[data.id])
  //  }
    
      return (
        <div>
            <div className="App">
                <br></br>
                <Button  href='/'>Menu</Button>
            
                <div>
                  <form>
                    <h2 for="buscador">Buscar funcionário por ID</h2>
                    <input type="text" id="busca" name="buscaId" placeholder="Inserir o numero do ID"></input>
                    <input type="submit" value="Submit"></input>
                  </form>
                </div>

            <ul>
                {data.map(dat => (
                    <li  key={dat.id}>
                       id:{dat.id} | Nome: {dat.nome} | Cpf: {dat.cpf}
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
  }

export default Funcid;


// import React from 'react';
// import {FlatList, StyleSheet} from 'react-native';

// import Post from './src/components/Post';

// const App: () => React$Node = () => {
//   const fotos = [
//     {id: 1, usuario: 'eu 1'},
//     {id: 2, usuario: 'eu 2'},
//     {id: 3, usuario: 'eu 3'},
//   ];

//   return (
//     <FlatList style={styles.container}
//       data={fotos}
//       keyExtractor={item => item.id}
//       renderItem={({item}) => <Post foto={item} />}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//   },
// });

// export default App;
