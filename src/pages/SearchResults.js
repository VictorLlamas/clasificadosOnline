import React, { Component } from 'react';
import CustomNavBar from '../components/genericComponents/Navbar'
import { withRouter } from 'react-router-dom'
import Filters from '../components/genericComponents/Filters'
import Card from '../components/genericComponents/Card'
import {findAds} from '../services/AdsServices'

class SearchResults extends Component {
    constructor(props){
        super(props);
        this.state = {
            success: '',
            message: []

        }
    }

    componentDidMount(){
        findAds(this.props.location.search)
            .then(data =>{
                this.setState({
                    success: data.success,
                    message: data.message
                })
                
            })
    }

    cards (){
        if(this.state.message === 'undefined' || this.state.message.length === 0){
            return(
                <h4>No se encontraron registros</h4>
            )
        }else{
            return(
                <div>
                    {this.state.message.map((adsData, key) => <Card key={key} data={adsData}/>)}
                </div>
            )
        }
    }
    render(){
        return(
            <div>
              <CustomNavBar/>  
                <div className="container-fluid">
                    <div className="row flex-xl-nowrap h-100">
                        <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
                            <Filters/>
                        </div>
                        <main className="container-fluid col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
                        {this.cards()} 
                        </main>
                    </div>
                </div> 
            </div>
        )
    }
}

export default withRouter(SearchResults);
