
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CustomNavbar from '../components/genericComponents/Navbar';

class MyAds extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        e.preventDefault()
        const { name, value } = e.target
        this.setState ( {
            [name]: value,
        })
    }

    onSubmit(e){
        e.preventDefault()
        
      }

      routeCreateAds = () => {
        this.props.history.push('/createAds');
        
    }

    render() {

        return (
            <div>
                <CustomNavbar/>
                <div className="container h-100 divCenterScreen">
                    <div className="row h-100 justify-content-center align-items-center">
                        <form className="w-100 border rounded-lg p-md-4" onSubmit={this.onSubmit} onReset={this.onReset}>
                            <div className="row justify-content-end">
                                <button className="btn btn-primary mb-2 mr-2 " onClick={this.routeCreateAds}>Crear Anuncio</button>
                            </div>
                            <div className="row">
                                <h1>Mis Anuncios</h1>

                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        )
    }
}

export default withRouter(MyAds)
