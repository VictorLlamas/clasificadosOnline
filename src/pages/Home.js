import React, { Component } from 'react';
import CustomNavBar from '../components/genericComponents/Navbar'
import Footer from '../components/genericComponents/Footer'

class Home extends Component {
    render() {
        return (
            <div>
                <CustomNavBar/>
                <div className="container h-100 divCenterScreen">
                    <div className="row h-100 justify-content-center align-items-center">
                        <form className="w-100">
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <input type="text" className="form-control" id="inputMainSearch" placeholder="Enter an address, neighborhood, city or ZIP code"/>
                                </div>
                                <div className="form-group col-md-2">
                                    <select id="inputSearchType" className="form-control">
                                        <option defaultValue>Buy</option>
                                        <option>Rent</option>
                                        <option>Sell</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <button type="submit" className="btn btn-primary">Search</button>
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

export default Home;