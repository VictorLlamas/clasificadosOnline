import React, { Component } from 'react';
import CustomNavBar from '../components/genericComponents/Navbar'
import { withRouter } from 'react-router-dom';
import Footer from '../components/genericComponents/Footer'
import Jumbotron from '../components/genericComponents/Jumbotron'

class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            search: '',
            transactionType: 'Renta',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        e.preventDefault()
        const { name, value } = e.target
        this.setState ( {
            [name]: value,
        })
    }
    onSubmit(e){
        e.preventDefault();
        this.props.history.push({
            pathname: "/results",
            search: `?search=${this.state.search}&transactionType=${this.state.transactionType}`
            }) 
    }
    
    render() {
        return (
            <div>
                <CustomNavBar/>
                <Jumbotron title="Bienvenidos"/>
                <div className="container h-100 divCenterScreen">
                    <div className="row h-100 justify-content-center align-items-center">
                        <form className="w-100" onSubmit={ this.onSubmit }>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <input type="text" className="form-control" id="inputMainSearch" name="search" onChange={ this.onChange }  value= { this.state.search } placeholder="Calle, Colonia, Ciudad o Codigo Postal"/>
                                </div>
                                <div className="form-group col-md-2">
                                    <select id="inputSearchType" className="form-control" name="transactionType" onChange={ this.onChange } value={ this.state.transactionType }>
                                        <option>Renta</option>
                                        <option>Venta</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <button type="submit" className="btn btn-primary">Buscar</button>
                                </div>      
                            </div>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Home);