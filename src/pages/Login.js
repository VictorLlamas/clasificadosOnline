import React, { Component }from 'react'
import { withRouter } from 'react-router-dom';
import CustomNavBar from '../components/genericComponents/Navbar';



class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.routeRegister = this.routeRegister.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onReset = this.onReset.bind(this)
    }

    handleChange(e){
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
                            <h1>Sign-in</h1>         
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange}/>
                                <small id="emailHelp" className="form-text text-muted">we'll never share your email with someone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={this.state.password}onChange={this.handleChange}/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Keep me signed in</label>
                            </div >
                            <div  className="btn-toolbar justify-content-center" >
                                <button type="submit" className="btn btn-primary btn-sm mb-2 mr-2 ">Sign-in</button>
                                <button type="reset" className="btn btn-primary btn-sm mb-2 mr-2">Cancel</button>   
                            </div>
                            <div className="row h-100 justify-content-center"> 
                                <h6>New on Clasificados Online?</h6>
                            </div>
                            <div className="row h-100 justify-content-center">
                                <button className="btn btn-primary btn-sm mb-2 mr-2" onClick={this.routeRegister}>Create your Account</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>   
        )
    }
}

export default withRouter(Login);
