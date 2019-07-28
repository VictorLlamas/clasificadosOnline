import React, { Component } from 'react'
import {ReactComponent as Rooms} from '../../images/rooms.svg'
import {ReactComponent as Bathrooms} from '../../images/bathrooms.svg'
import {ReactComponent as Levels} from '../../images/levels.svg'
import {ReactComponent as ParkingLots} from '../../images/parking_lots.svg'

class DescriptionProperty extends Component{
    constructor(props){
        super(props)
        this.state = {
            description: "Some description in here about the property ",
            rooms: 2,
            bathrooms: 2.5,
            levels: 2,
            parkingLots: 2,
            land: 78,
            construction: 115,

        }
    }

    render(){
        return(
            <div className="container">
                <div>
                    <h3> Descripción</h3>
                    <div>
                        <p>{this.state.description}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3> Características</h3>
                        <p>
                            <Rooms/>
                            <label>{this.state.rooms} Recamaras</label>
                        </p>
                        <p>
                            <Bathrooms/>
                            <label>{this.state.bathrooms} Baños</label>
                        </p>
                        <p>
                            <Levels/>
                            <label>{this.state.levels} Niveles</label>
                        </p>
                        <p>
                            <ParkingLots/>
                            <label>{this.state.rooms} Espacios de estacionamiento</label>
                        </p>
                        <p>
                            <label>{this.state.land} m<sup>2</sup> de Terreno</label>
                        </p>
                        <p>
                            <label>{this.state.construction} m<sup>2</sup> de Construcción</label>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DescriptionProperty