import React, { Component } from 'react'

class PageHeader extends Component{
    constructor(props){
        super(props)
        this.state = {
            land: 78,
            construction: 115,
            propertyType: "Casa",
            county: "Jalisco",
            municipality: "Tlaquepaque",
            neighborhood: "Santa Maria Tequequexpan",
            transactionType: "venta",
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div> 
                        <h1>{this.state.propertyType} en {this.state.transactionType} en {this.state.neighborhood}, {this.state.municipality}, {this.state.county}</h1>
                    </div>
                    <div className="row container">
                        <p><span>{this.state.land}</span>m<sup>2</sup> de Terreno |</p>
                        <p><span>{this.state.construction}</span>m<sup>2</sup> de Construcción</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default  PageHeader