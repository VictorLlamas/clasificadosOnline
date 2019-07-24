import React, { Component } from 'react'


/* function  saveTask(task){
    return fetch(`${BASE_URL}todos/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
        .then(response => {
          return response.json()
        })
        .catch(err => console.log(err))
  } */

class Register extends Component {
    constructor(props){
        super(props)

        this.initialState = {
            email: '',
            password: '',
            name: '',
            surname: '',
            birthday: '',
            telephone: '',
            celphone: '',
            country: '',
            state: '',
            township: '',
            city: '',
            zipCode: '',
        }
        this.state = this.initialState

        this.onCreateUser = this.onCreateUser.bind(this)
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState ( {
            [name]: value,
        })
    }

    onCreateUser(event) {
        event.preventDefault()
        /* saveTask(this.state)
          .then(() => {
            this.setState({
              tasks: [...tasks, taskValue],
              taskValue: ''
            })
          }) */
      }

    render() {
        const {
            email,
            password,
            name,
            lastname,
            birthday,
            telephone,
            celphone,
            country,
            state,
            township,
            city,
            zipCode,
        } = this.state

        return (
            <form onSubmit={this.onCreateUser}>
                <fieldset>
                    <legend>Usuario</legend>
                    <label>Email <input type="email" name="email" value={email} onChange={this.handleChange}/></label>
                    <label>Password <input type="password" name="password" value={password} onChange={this.handleChange}/></label>
                </fieldset>
                <fieldset>
                    <legend>Datos Personales</legend> 
                    <label>Nombre <input type="text" name="name" value={name} onChange={this.handleChange} /></label>
                    <label>Apellido <input type="text" name="lastname" value={lastname} onChange={this.handleChange} /></label>
                    <label>Fecha de Nacimiento <input type="date" name="birthday" value={birthday} onChange={this.handleChange} /></label>
                    <label>Telefono Fijo <input type="tel" name="telephone" value={telephone} onChange={this.handleChange} /></label>
                    <label>Celular <input type="tel" name="celphone" value={celphone} onChange={this.handleChange} /></label>
                    <label>Pais <input type="text" name="country" value={country} onChange={this.handleChange} /></label>
                    <label>Estado <input type="text" name="state" value={state} onChange={this.handleChange} /></label>
                    <label>Municipio <input type="text" name="township" value={township} onChange={this.handleChange} /></label>
                    <label>Ciudad <input type="text" name="city" value={city} onChange={this.handleChange} /></label>
                    <label>Codigo Postal <input type="number" name="zipCode" value={zipCode} onChange={this.handleChange} /></label>
                </fieldset>
                
                <div>
                    <button>Crear Usuario</button>
                    <button type="reset"> Cancelar </button>
                </div>
            </form>
        )
    }
}

export default Register
