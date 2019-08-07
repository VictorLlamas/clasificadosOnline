import React, { Component } from 'react';
import CustomNavBar from '../components/genericComponents/Navbar'
import Filters from '../components/genericComponents/Filters'
import Card from '../components/genericComponents/Card'
class SearchResults extends Component {
    render(){
        return(
            <div>
              <CustomNavBar/>  
                <div className="container-fluid">
                    <div className="row flex-xl-nowrap h-100">
                        <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
                            <Filters/>
                        </div>
                        <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
                            <Card/>
                        </main>
                    </div>
                </div> 
            </div>
        )
    }
}

export default SearchResults;
