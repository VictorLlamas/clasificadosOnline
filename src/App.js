import React, { Component } from 'react'
import Register from './components/register/'
import Signin from './components/signin/'
import Header from './components/header/'

class App extends Component {
    render() {
    return (
      <div>
        <Signin />
      </div>
    )
  }
}

export default App;