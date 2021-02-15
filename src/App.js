import './App.css';

import React from 'react'
import Login from './components/login/Login'

import Button from 'react-bootstrap/Button';


import Jumbotron from 'react-bootstrap/Jumbotron'; 
import Container from 'react-bootstrap/Container'; 

import Routes from './routes/Routes'

// function App() {
class App extends React.Component{

  render(){

  return (
  //   <Container className="p-3"> 
  //   <Jumbotron> 
  //     <h1 className="header">Welcome To React-Bootstrap</h1> 
  //     <Button variant="danger">Click here</Button> 
  //   </Jumbotron> 
  // </Container> 

    // <div>
    //   <label>Hola Tavo</label>
    //   <Button>Entrar</Button>
    //   <Login></Login>
    // </div>

  <div>
    {/* <h1>Nada...</h1> */}
    {/* <Login></Login> */}
    <Routes />
  </div>    

  );
}
}
export default App;
