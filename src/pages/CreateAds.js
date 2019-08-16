
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CustomNavbar from '../components/genericComponents/Navbar';
//import { createAds } from '../services/adsServices'

class CreateAds extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: "", 
            description: "",
            address: "",
            neighborhood: "",
            city: "",
            state: "",
            zipCode:"",
            rooms:"",
            bathrooms:"",
            parkingLots: "",
            levels: "",
            land: "",
            construction: "",
            propertyType: "",
            transactionType: "",
            price:"",
            images: "",
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onReset = this.onReset.bind(this)
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

    onReset(e){
        e.preventDefault()
        this.props.history.push('/myads');
    }

    render() {

        return (
            <div>
                <CustomNavbar/>
                <div className="container h-100 divCenterScreen">
                    <div className="row h-100 justify-content-center align-items-center">
                        <form className="w-100 border rounded-lg p-md-4" onSubmit={this.onSubmit} onReset={this.onReset}>
                            <h2> Crear Anuncio</h2>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputDescription">Descripción</label>
                                    <textarea className="form-control" id="inputDescription" name="description" rows="3" value={this.state.description} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputAddress">Dirección</label>
                                        <input type="Text" className="form-control" id="inputAdress" name="address" value={this.state.address} onChange={this.onChange}/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputState">Estado</label>
                                        <select id="inputState" className="form-control" name="state" value={this.state.state} onChange={this.onChange}>
                                            <option>Elegir...</option>
                                            <option>Jalisco</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputCity">Ciudad</label>
                                        <input type="text" className="form-control" id="inputCity" name="city" value={this.state.city} onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputNeighborhood">Colonia</label>
                                        <input type="Text" className="form-control" id="inputNeighborhood" name="neighborhood" value={this.state.neighborhood} onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputZip">Codigo Postal</label>
                                        <input type="text" className="form-control" id="inputZip" name="zipCode" value={this.state.zipCode} onChange={this.onChange}/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label>Amenidades</label>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputRooms">Recamaras</label>
                                        <select className="form-control" id="inputRooms" name="rooms" value={this.state.rooms} onChange={this.onChange}>
                                            {['1', '2', '3', '4','5+'].map((value, index)=>(
                                            <option key={index}>{value}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputBathrooms">Baños</label>
                                        <select className="form-control" id="inputBathrooms" name="bathrooms" value={this.state.bathrooms} onChange={this.onChange}>
                                            {['1', '1.5', '2', '2.5','3+'].map((value, index)=>(
                                                <option key={index}>{value}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputParking">Estacionamiento</label>
                                        <select className="form-control" id="inputParking" name="parkingLots" value={this.state.parkingLots} onChange={this.onChange}>
                                            {['1', '2', '3', '4','5+'].map((value, index)=>(
                                                <option key={index}>{value}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label>Caracteristicas</label>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputLevels">Niveles</label>
                                            <select className="form-control" id="inputLevels" name="levels" value={this.state.levels} onChange={this.onChange}>
                                                {['1', '2', '3'].map((value, index)=>(
                                                    <option key={index}>{value}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputLand">Terreno<sup> (m2)</sup></label>
                                            <input type="text" className="form-control" id="inputland" name="land" value={this.state.land} onChange={this.onChange}/>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputConstruction">Construcción<sup> (m2)</sup></label>
                                            <input type="text" className="form-control" id="inputConstruction" name="construction" value={this.state.construction} onChange={this.onChange}/>
                                        </div>
                                    </div>
                            </div>
                            <div>
                                <div className="form-row">
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputPropertyType">Tipo de Propiedad</label>
                                        <select id="inputPropertyType" className="form-control" name="propertyType" value={ this.state.propertyType } onChange={ this.onChange }>
                                            <option>Departamento</option>
                                            <option defaultValue>Casa</option>
                                            <option>Terreno</option>
                                            <option>Oficina</option>
                                            <option>Otros</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputTransactionType">Tipo de Transacción</label>
                                        <select id="inputTransactionType" className="form-control" name="transactionType" value={ this.state.transactionType } onChange={ this.onChange }>
                                            <option>Renta</option>
                                            <option>Venta</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-4">
                                            <label htmlFor="inputPrice">Precio</label>
                                            <input type="text" className="form-control" id="inputPrice" name="price" value={this.state.price} onChange={this.onChange}/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <div className="file-field">
                                            <div className="btn btn-primary btn-sm float-left">
                                                <input type="file" multiple/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                                <button type="submit" className="btn btn-primary mb-2 mr-2 mt-3">Crear Anuncio</button>
                                <button type="reset" className="btn btn-primary mb-2 mr-2 mt-3">Cancelar</button>
                        </form>
                    </div>
                </div>
            </div> 
        )
    }
}

export default withRouter(CreateAds)
