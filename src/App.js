import React, { Component } from 'react'
import Register from './components/register/'
import Signin from './components/signin/'
import Header from './components/header/'
import Homepage from './components/homepage/'

class App extends Component {
    render() {
    return (
      <div>
        <Homepage />
      </div>
    )
  }
}

export default App;