import React, { Component } from 'react'
import Register from './components/register/'
import Signin from './components/signin/'
import Header from './components/header/'
import Homepage from './components/homepage/'
import Filter from './components/filters/'
import ResultCard from './components/resultCard/'

class App extends Component {
    render() {
    return (
      <div>
        <ResultCard />
      </div>
    )
  }
}

export default App;