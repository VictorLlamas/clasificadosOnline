import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/'
import Signin from './Signin'
import Homepage from './Home'
import About from './About'
import Notfound from './components/notFound'

class App extends Component {
    render() {
    return (
      <React.Fragment>
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/signin' component={Signin} />
            <Route path='/about' component={About} />
            <Route component={Notfound} />
          </Switch>  
        </Router>
      </React.Fragment>
    )
  }
}

export default App;