import React from 'react';
import { Link } from 'react-router-dom';
import ViewAds from '../../pages/ViewAds'


function ResultCard(props){
        return(
            <div className="card float-left" style={{width:'18rem', marginTop:'12px', marginLeft:'3%'}}>
                <img className="card-img-top" src={props.data.images[0]} alt='property'/>
                <div className="card-body">
                    <h5 className="card-title">Se {props.data.transactionType} {props.data.propertyType} en colonia {props.data.neighborhood}</h5>
                    <h6 className="card-subtitle mb-3 text-muted">{props.data.city}, {props.data.state}</h6>
                    <h4 className="card-title"> $ {props.data.price}</h4>
                    <p className="card-text">{props.data.construction}<sup>m2</sup> | {props.data.rooms} Recamaras| {props.data.bathrooms} Baños</p>
                    <p className="card-text"> <small className="text-muted">{props.data.date}</small></p>
                    <div>
                        <button className='btn btn-primary' ><Link to={{
                            pathname:`/results/view/${props.data._id}`,
                            state: {
                                data: props.data
                            }
                            }}>Ver</Link></button>
                    </div>
                </div>
            </div> 
        )
}

export default ResultCard