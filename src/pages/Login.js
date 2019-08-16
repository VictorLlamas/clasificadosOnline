import React, { Component }from 'react'
import { withRouter } from 'react-router-dom';
import CustomNavBar from '../components/genericComponents/Navbar';
import { getToken } from '../services/userServices';
import Auth from '../components/Auth';



class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error: false,
            errorMessage: '',

        }
        this.routeRegister = this.routeRegister.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onReset = this.onReset.bind(this)
    }

    onChange(e){
        const { name, value } = e.target
        this.setState ( {
            [name]: value,
        })
    }

    onSubmit(e){
        e.preventDefault()
        const {email, password} = this.state
        getToken({
            email: email,
            password: password,
        }).then(userData => {
            if(userData.success === false){
                this.setState({
                    error: true,
                    errorMessage: userData.message,
                    password: '',
                })
                alert(this.state.errorMessage);

            }else{
                this.setState({
                    error:false,
                    errorMessage: ''
                })
                Auth.login(userData, () => {
                    this.props.history.push('/myinfo')
                })
            }
        })   
      }

    onReset(e){
        e.preventDefault()
        this.props.history.push('/');
    }

    routeRegister = () => {
        this.props.history.push('/register');
        
    }
    render(){
       return(
            <div>
                <CustomNavBar/>
                <div className="container h-100 divCenterScreen">
                    <div className="row h-100 justify-content-center align-items-center">
                        <form className="border rounded-lg p-md-4" onSubmit={this.onSubmit} onReset={this.onReset}>
                            <h1>Iniciar sesión</h1>         
                            <div className="form-group">
                                <label htmlFor="email">Correo</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="correo@ejemplo.com" name="email" value={this.state.email} onChange={this.onChange}/>
                                <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo con alguna persona.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="Contraseña" name="password" value={this.state.password}onChange={this.onChange}/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Recuerdame</label>
                            </div >
                            <div  className="btn-toolbar justify-content-center" >
                                <button type="submit" className="btn btn-primary btn-sm mb-2 mr-2 ">Entrar</button>
                                <button type="reset" className="btn btn-primary btn-sm mb-2 mr-2">Cancelar</button>   
                            </div>
                            <div className="row h-100 justify-content-center"> 
                                <h6>¿Nuevo en Clasificados Online?</h6>
                            </div>
                            <div className="row h-100 justify-content-center">
                                <button className="btn btn-primary btn-sm mb-2 mr-2" onClick={this.routeRegister}>Crea tu Cuenta</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>   
        )
    }
}

export default withRouter(Login);
