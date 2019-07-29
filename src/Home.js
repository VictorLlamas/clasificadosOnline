import React, { Component } from 'react';
import {Form, Col, Button} from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div className="container h-100 divCenterScreen">
                <div className="row h-100 justify-content-center align-items-center">
                    <Form className="w-100">
                        <Form.Row>
                            <Form.Group as={Col} md="8" controlId="formGridEmail">
                                <Form.Control type="text" placeholder="Ingresa Busqueda" />
                            </Form.Group>
                            <Form.Group as={Col} md="2" controlId="formGridState">
                                <Form.Control as="select">
                                    <option>Comprar</option>
                                    <option>Rentar</option>
                                    <option>Venta</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Button variant="primary" type="submit">Buscar</Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </div> 

               
            </div>
        )
    }
}

export default Home;