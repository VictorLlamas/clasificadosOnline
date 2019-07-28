import React, { Component } from 'react'
import Register from './components/register/'
import Signin from './components/signin/'
import Header from './components/header/'
import Homepage from './components/homepage/'
import Filter from './components/filters/'
import ResultCard from './components/resultCard/'
import PhotoCarousel from './components/photoCarousel/'
import PageHeader from './components/pageHeader/'
import DescriptionProperty from './components/descriptionProperty/'

class App extends Component {
    render() {
    return (
      <div>
        <PageHeader />
        <DescriptionProperty />

      </div>
    )
  }
}

export default App;