
import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import CustomNavbar from '../components/genericComponents/Navbar';

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
            city: '',
            zipCode: '',
        }
        this.state = this.initialState

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
        this.props.history.push('/');
    }

    render() {

        return (
            <div>
                <CustomNavbar/>
                <div className="container h-100 divCenterScreen">
                    <div className="row h-100 justify-content-center align-items-center">
                        <form className="w-100 border rounded-lg p-md-4" onSubmit={this.onSubmit} onReset={this.onReset}>
                            <h2> Create account </h2>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className='form-row'>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputName">Name</label>
                                    <input type='text' className="form-control" id="inputName" placeholder="Name" name="name" value={this.state.name} onChange={this.onChange}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputLastname">Last Name</label>
                                    <input type='text' className="form-control" id="inputLastname" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputBirthday">Birthday</label>
                                    <input type='date' className="form-control" id="inputBirthday" name="birthday" value={this.state.birthday} onChange={this.onChange}/>
                                </div>
                                <div className='form-group col-md-4'>
                                    <label htmlFor="inputTelephone">Telephone</label>
                                    <input type='tel' className="form-control" id="inputTelephone" name="telephone" value={this.state.telephone} onChange={this.onChange}/>
                                </div>
                                <div className='form-group col-md-4'>
                                    <label htmlFor="inputCelphone">Celphone</label>
                                    <input type='tel' className="form-control" id="inputCelphone" name="celphone" value={this.state.celphone} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputCountry">Country</label>
                                    <select id="inputCountry" className="form-control" name="country" value={this.state.country} onChange={this.onChange}>
                                        <option>Choose...</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputState">State</label>
                                    <select id="inputState" className="form-control" name="state" value={this.state.state} onChange={this.onChange}>
                                        <option>Choose...</option>
                                        <option>Jalisco</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputCity">City</label>
                                    <input type="text" className="form-control" id="inputCity" name="city" value={this.state.city} onChange={this.onChange}/>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">Zip</label>
                                    <input type="text" className="form-control" id="inputZip" name="zipCode" value={this.state.zipCode} onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="termsAndCondCheck"/>
                                    <label className="form-check-label" htmlFor="termsAndCondCheck"> Accept terms and conditions</label>
                                </div>
                            </div>
                                <button type="submit" className="btn btn-primary mb-2 mr-2">Register</button>
                                <button type="reset" className="btn btn-primary mb-2 mr-2">Cancel</button>
                        </form>
                    </div>
                </div>
            </div> 
        )
    }
}

export default withRouter(Register)
