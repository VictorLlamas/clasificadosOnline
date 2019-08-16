
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CustomNavbar from '../components/genericComponents/Navbar';
import { createUser } from '../services/userServices'

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: '',
            birthday: '',
            telephone: '',
            celphone: '',
            country: '',
            state: '',
            city: '',
            zipCode: '',
            error: '',
            errorMessage: '',
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
        if(document.getElementById('termsAndCondCheck').checked ){
            createUser(this.state)
                .then(userData => {
                    if (userData.success === false){
                        this.setState({
                            error: true,
                            errorMessage: userData.message,
                        })
                        alert(this.state.errorMessage);
                    }else{
                        this.setState({
                            error:false,
                            errorMessage: ''
                        })
                        alert("User created successfully")
                        this.props.history.push('/login');
                    }
                })
        }else{
            alert("To continue, you must agree to terms and conditios")
        }
      }

    onReset(e){
        e.preventDefault()
        this.props.history.push('/login');
    }

    render() {

        return (
            <div>
                <CustomNavbar/>
                <div className="container h-100 divCenterScreen">
                    <div className="row h-100 justify-content-center align-items-center">
                        <form className="w-100 border rounded-lg p-md-4" onSubmit={this.onSubmit} onReset={this.onReset}>
                            <h2> Crear Cuenta </h2>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail">Correo</label>
                                    <input type="email" className="form-control" id="inputEmail" name="email" value={this.state.email} onChange={this.onChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword">Contraseña</label>
                                    <input type="password" className="form-control" id="inputPassword" name="password" value={this.state.password} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputName">Nombre</label>
                                    <input type='text' className="form-control" id="inputName" name="name" value={this.state.name} onChange={this.onChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputLastname">Apellidos</label>
                                    <input type='text' className="form-control" id="inputLastname" name="lastname" value={this.state.lastname} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputBirthday">Fecha de Nacimiento</label>
                                    <input type='date' className="form-control" id="inputBirthday" name="birthday" value={this.state.birthday} onChange={this.onChange}/>
                                </div>
                                <div className='form-group col-md-4'>
                                    <label htmlFor="inputTelephone">Telefono Fijo</label>
                                    <input type='tel' className="form-control" id="inputTelephone" name="telephone" value={this.state.telephone} onChange={this.onChange}/>
                                </div>
                                <div className='form-group col-md-4'>
                                    <label htmlFor="inputCelphone">Telefono Celular</label>
                                    <input type='tel' className="form-control" id="inputCelphone" name="celphone" value={this.state.celphone} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputCountry">Pais</label>
                                    <select id="inputCountry" className="form-control" name="country" value={this.state.country} onChange={this.onChange}>
                                        <option>Elegir...</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputState">Estado</label>
                                    <select id="inputState" className="form-control" name="state" value={this.state.state} onChange={this.onChange}>
                                        <option>Elegir...</option>
                                        <option>Jalisco</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputCity">Ciudad</label>
                                    <input type="text" className="form-control" id="inputCity" name="city" value={this.state.city} onChange={this.onChange}/>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">Codigo Postal</label>
                                    <input type="text" className="form-control" id="inputZip" name="zipCode" value={this.state.zipCode} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="termsAndCondCheck"/>
                                    <label className="form-check-label" htmlFor="termsAndCondCheck"> Acepto terminos y condiciones</label>
                                </div>
                            </div>
                                <button type="submit" className="btn btn-primary mb-2 mr-2">Crear Cuenta</button>
                                <button type="reset" className="btn btn-primary mb-2 mr-2">Cancelar</button>
                        </form>
                    </div>
                </div>
            </div> 
        )
    }
}

export default withRouter(Register)
