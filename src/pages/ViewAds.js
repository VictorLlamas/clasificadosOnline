import React from 'react';
import CustomNavbar from '../components/genericComponents/Navbar';
import {ReactComponent as Rooms} from '../images/rooms.svg'
import {ReactComponent as Bathrooms} from '../images/bathrooms.svg'
import {ReactComponent as Levels} from '../images/levels.svg'
import {ReactComponent as ParkingLots} from '../images/parking_lots.svg'
 
function ViewAds(props) {
    console.log(props.location.state)
    const data = props.location.state.data
    return (
        <div>
            <CustomNavbar/>
            <div className="container h-100 divCenterScreen">
                <div className="row h-100 justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div> 
                            <h1>{data.propertyType} en {data.transactionType} en {data.neighborhood}, {data.city}, {data.state}</h1>
                        </div>
                        <div className="row container">
                            <p><span>{data.land}</span>m<sup>2</sup> de Terreno |</p>
                            <p><span>{data.construction}</span>m<sup>2</sup> de Construcción</p>
                        </div>
                    </div>
                </div>
                <div id="carouselControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                            {data.images.map((image,key) => (
                                <div key={key} className="carousel-item"> 
                                    <img key={key} src={image} className="d-block w-100" alt={`property${key}`}/>
                                </div>
                            ))}
                    </div>
                    <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>   
                <div className="container">
                    <div>
                        <h3> Descripcion</h3>
                        <div>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3> Caracteristicas</h3>
                            <p>
                                <Rooms/>
                                <label>{data.rooms} Recamaras</label>
                            </p>
                            <p>
                                <Bathrooms/>
                                <label>{data.bathrooms} Baños</label>
                            </p>
                            <p>
                                <Levels/>
                                <label>{data.levels} Niveles</label>
                            </p>
                            <p>
                                <ParkingLots/>
                                <label>{data.rooms} Estacionamientos</label>
                            </p>
                            <p>
                                <label>{data.land} m<sup>2</sup> Terreno</label>
                            </p>
                            <p>
                                <label>{data.construction} m<sup>2</sup> Construcción</label>
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ViewAds;