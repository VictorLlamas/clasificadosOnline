import React, { Component } from 'react';
import CustomNavbar from '../components/genericComponents/Navbar'
class About extends Component {
    render() {
        return (
            <div>
                <CustomNavbar/>
                <div className="container h-100 divCenterScreen">
                    <div className="row h-100 justify-content-center align-items-center">
                    <div className="card text-center">
                        <div className="card-header">
                            <h2>About</h2>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Clasificados Online</h5>
                            <p className="card-text">Version 0.1</p>
                            <p>
                                Online Classifieds offers you the widest range of means to market your properties, 
                                products and services in the most efficient way in the market, since they are 
                                strategically aimed at a sector interested in acquiring a property to live, rent
                                or as an investment.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;