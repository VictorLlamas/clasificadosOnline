import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Homepage from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import SearchResults from './pages/SearchResults'
import MyInfo from './pages/MyInfo'
import ViewAds from './pages/ViewAds'
import MyAds from './pages/MyAds'
import CreateAds from './pages/CreateAds'
import NotFound from './components/genericComponents/NotFound'
import { ProtectedRoute } from './components/ProtectedRoute'

class App extends Component {
    render() {
    return (
      <React.Fragment>
        <Router basename='/'>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/login' component={Login} />
            <Route path='/about' component={About} />
            <Route exact path="/results/view/:id" render={ViewAds} />
            <Route path='/register' component={Register}/>
            <Route path='/results' component={SearchResults}/>
            <ProtectedRoute path='/myinfo' component={MyInfo}/>
            <ProtectedRoute path='/myads' component={MyAds}/>
            <ProtectedRoute path='/createAds' component={CreateAds}/>
            <Route component={NotFound} />
          </Switch>  
        </Router>
      </React.Fragment>
    )
  }
}

export default App;