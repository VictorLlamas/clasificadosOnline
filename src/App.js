import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Homepage from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import SearchResults from './pages/SearchResults'
import NotFound from './components/genericComponents/NotFound'

class App extends Component {
    render() {
    return (
      <React.Fragment>
        <Router basename='/'>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/login' component={Login} />
            <Route path='/about' component={About} />
            <Route path='/register' component={Register}/>
            <Route path='/results' component={SearchResults}/>
            <Route component={NotFound} />
          </Switch>  
        </Router>
      </React.Fragment>
    )
  }
}

export default App;