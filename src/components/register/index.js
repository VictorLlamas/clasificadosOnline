import React, { Component } from 'react'
import { Form, Button, Col } from 'react-bootstrap'



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
            <Form onSubmit={this.onCreateUser}>
                <Form.Group controlId="formBasicUser">
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control type="email" placeholder="Introduce Email" name="email" value={email} onChange={this.handleChange}/>
                    <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text>  
                </Form.Group> 
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" name="password" value={password} onChange={this.handleChange}/>
                </Form.Group>
                
                <Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" name="name" value={name} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Apellidos" name="lastname" value={lastname} onChange={this.handleChange}/>
                        </Form.Group>    
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridBirthday">
                            <Form.Label>Fecha de Nacimiento</Form.Label>
                            <Form.Control type="date" name="birthday" value={birthday} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTelefone">
                            <Form.Label>Telefono Fijo</Form.Label>
                            <Form.Control type="tel" name="telephone" value={telephone} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTelefone">
                            <Form.Label>Telefono Celular</Form.Label>
                            <Form.Control type="tel" name="celphone" value={celphone} onChange={this.handleChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Label>Pais</Form.Label>
                            <Form.Control as="select" name="country" value={country} onChange={this.handleChange}>
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control as="select" name="state" value={state} onChange={this.handleChange}>
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridTownship">
                            <Form.Label>Municipio</Form.Label>
                            <Form.Control name="township" placeholder="Municipio" value={township} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control type="text" placeholder="Ciudad" name="city" value={city} onChange={this.handleChange} required />
                            <Form.Control.Feedback type="invalid"> Please provide a valid state. </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Codigo Postal</Form.Label>
                        <Form.Control type="text" placeholder="Zip" name="zipCode" value={zipCode} onChange={this.handleChange} required />
                        <Form.Control.Feedback type="invalid"> Please provide a valid zip. </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                </Form.Group>
                <Form.Group>
                    <Form.Check required label="Aceptar Terminos y Condiciones" feedback="You must agree before submitting."/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
                <Button variant="primary" type="reset">Cancelar</Button>
            </Form>
        )
    }
}

export default Register
