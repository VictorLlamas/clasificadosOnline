import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import CustomNavbar from '../components/genericComponents/Navbar';
import { updateUser } from '../services/userServices';

class MyInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            success: '',
            token: '',
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
            message: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onReset = this.onReset.bind(this)
    }

    componentDidMount(){
        const data = JSON.parse(localStorage.getItem('userData'));
        const birthday = new Date(data.userInfo.birthday)
        console.log(data.userInfo.birthday)
        console.log(birthday);
        console.log(data.userInfo.password)
        this.setState({
            success: data.success,
            toke: data.token,
            name: data.userInfo.name,
            lastname: data.userInfo.lastname,
            email: data.userInfo.email,
            password: data.userInfo.password,
            birthday: data.userInfo.birthday,
            telephone: data.userInfo.telephone,
            celphone: data.userInfo.celphone,
            country: data.userInfo.country,
            state: data.userInfo.state,
            city: data.userInfo.city,
            zipCode: data.userInfo.zipCode,
        })
    }

    onChange(e){
        e.preventDefault()
        const { name, value } = e.target
        this.setState ( {
            [name]: value,
        })
    }

    updateLocalUser(data){
        this.setState({
            success: data.success,
            message: data.message,
            name: data.userInfo.name,
            lastname: data.userInfo.lastname,
            email: data.userInfo.email,
            password: data.userInfo.password,
            birthday: data.userInfo.birthday,
            telephone: data.userInfo.telephone,
            celphone: data.userInfo.celphone,
            country: data.userInfo.country,
            state: data.userInfo.state,
            city: data.userInfo.city,
            zipCode: data.userInfo.zipCode,    
        })
    }

    enableForm(){
        document.getElementById("inputName").disabled = false;
        document.getElementById("inputLastname").disabled = false;
        document.getElementById("inputBirthday").disabled = false;
        document.getElementById("inputTelephone").disabled = false;
        document.getElementById("inputCelphone").disabled = false;
        document.getElementById("inputCountry").disabled = false;
        document.getElementById("inputState").disabled = false;
        document.getElementById("inputCity").disabled = false;
        document.getElementById("inputZip").disabled = false;
        document.getElementById("cancelButton").disabled = false;
        document.getElementById("editButton").textContent = "Salvar";
    }

    disableForm(){
        document.getElementById("inputName").disabled = true;
        document.getElementById("inputLastname").disabled = true;
        document.getElementById("inputBirthday").disabled = true;
        document.getElementById("inputTelephone").disabled = true;
        document.getElementById("inputCelphone").disabled = true;
        document.getElementById("inputCountry").disabled = true;
        document.getElementById("inputState").disabled = true;
        document.getElementById("inputCity").disabled = true;
        document.getElementById("inputZip").disabled = true;
        document.getElementById("cancelButton").disabled = true;
        document.getElementById("editButton").textContent = "Editar";

    }
    onSubmit(e){
        e.preventDefault()
        if (document.getElementById("editButton").textContent === "Editar"){
            this.enableForm();
        }else{
            updateUser(this.state)
                .then( userData => {
                    if (userData.success === false){
                        this.setState({
                            error: true,
                            errorMessage: userData.message,
                        })
                        this.componentDidMount();
                        alert(this.state.errorMessage);
                    }else{
                        this.setState({
                            error:false,
                            errorMessage: ''
                        })
                        this.updateLocalUser(userData);
                        this.disableForm();
                        localStorage.setItem('userData', JSON.stringify(userData))
                    }
                })
        }
        
      }

    onReset(e){
        e.preventDefault()
        this.disableForm();
        this.componentDidMount();

    }

    render() {

        return (
            <div>
                <CustomNavbar/>
                <div className="container h-100 divCenterScreen">
                    <div className="row h-100 justify-content-center align-items-center">
                        <form className="w-100 border rounded-lg p-md-4" onSubmit={this.onSubmit} onReset={this.onReset}>
                            <h2> My Info </h2>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail">Correo</label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange} disabled/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword">Contraseña</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} disabled/>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputName">Nombre</label>
                                    <input type='text' className="form-control" id="inputName" placeholder="Name" name="name" value={this.state.name} onChange={this.onChange} disabled/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputLastname">Apellidos</label>
                                    <input type='text' className="form-control" id="inputLastname" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.onChange} disabled/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputBirthday">Fecha de nacimiento</label>
                                    <input type='date' className="form-control" id="inputBirthday" name="birthday" value={this.state.birthday} onChange={this.onChange} disabled/>
                                </div>
                                <div className='form-group col-md-4'>
                                    <label htmlFor="inputTelephone">Telefono fijo</label>
                                    <input type='tel' className="form-control" id="inputTelephone" name="telephone" value={this.state.telephone} onChange={this.onChange}disabled/>
                                </div>
                                <div className='form-group col-md-4'>
                                    <label htmlFor="inputCelphone">Telefono celular</label>
                                    <input type='tel' className="form-control" id="inputCelphone" name="celphone" value={this.state.celphone} onChange={this.onChange} disabled/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputCountry">Pais</label>
                                    <select className="form-control" id="inputCountry" name="country" value={this.state.country} onChange={this.onChange} disabled>
                                        
                                        <option value=''>{this.state.country}</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputState">Estado</label>
                                    <select className="form-control" id="inputState" name="state" value={this.state.state} onChange={this.onChange} disabled>
                                        <option value=''>{this.state.state}</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputCity">Ciudad</label>
                                    <input type="text" className="form-control" id="inputCity" name="city" value={this.state.city} onChange={this.onChange} disabled/>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">Codigo Postal</label>
                                    <input type="text" className="form-control" id="inputZip" name="zipCode" value={this.state.zipCode} onChange={this.onChange} disabled/>
                                </div>
                            </div>
                                <button id="editButton" type="submit" className="btn btn-primary mb-2 mr-2">Editar</button>
                                <button id="cancelButton" type="reset" className="btn btn-primary mb-2 mr-2" disabled>Cancelar</button>
                        </form>
                    </div>
                </div>
            </div> 
        )
    }
}

export default withRouter(MyInfo)
