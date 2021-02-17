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
      <div>
        <Routes />
      </div>    
    );
  }
}
export default App;
