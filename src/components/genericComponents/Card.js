import React, { Component } from 'react'
import image from '../../images/test.jpg'
class ResultCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            imgPath: image,
            title: 'Departamento Ciudad Granja 3 Rec Nuevo en Venta',
            location: 'zapopan, Jalisco',
            price: '$3,170,000',
            params: {
                const: '116m2',
                bedrooms:'3 recamaras',
                restrooms: '2 baños',
            },
            timePublished: 'publicado hace 1 hora',
        }
    }

    render(){
        return(
            <div className="card" style={{width:'18rem'}}>
                <img className="card-img-top" src={this.state.imgPath} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.title}</h5>
                    <h6 class="card-subtitle mb-3 text-muted">{this.state.location}</h6>
                    <h4 className="card-title">{this.state.price}</h4>
                    <p className="card-text">{this.state.params.const} | {this.state.params.bedrooms} | {this.state.params.restrooms}</p>
                </div>
                <div class="card-footer text-muted"> {this.state.timePublished}</div>
            </div> 
        )
    }
}

export default ResultCard