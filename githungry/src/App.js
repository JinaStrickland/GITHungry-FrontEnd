import React, { Component } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import MainContainer from './container/MainContainer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router-dom'


class App extends Component {

  render(){
    return (
      <Container>
      <div >
        <div>
          <Header />
        </div>
        <div>
          <Navbar />
        </div>
        <div>
          <Route exact path="/login" component={ UserForm } />
        </div>
        <div>
          <Route exact path="/recipes" component={ MainContainer }/>
        </div>
      </div>

    </Container>
    );
  }
}

export default App;
