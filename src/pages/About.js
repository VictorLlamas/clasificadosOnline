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
                            Clasificados Online Casas y Terrenos te ofrece la más amplia gama de medios para que comercialices tus inmuebles,
                            productos y servicios de la manera más eficiente en el mercado, ya que están estratégicamente dirigidos a un sector
                            interesado en adquirir una propiedad para vivir, rentar o como inversión.
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