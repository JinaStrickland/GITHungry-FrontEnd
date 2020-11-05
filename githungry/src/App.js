import React, { Component } from 'react'
import MainContainer from './container/MainContainer'
import Header from './components/Header'
import Navbar from './components/Navbar'


class App extends Component {

  render(){
    return (
      <div >
        hello
        <div>
          <Header />
        </div>
        <div>
          <Navbar />
        </div>
        <div>
          <MainContainer />
        </div>
      </div>
    );
  }
}

export default App;
