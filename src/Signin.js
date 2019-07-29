import React, { Component }from 'react'

class Signin extends Component{
    render(){
        return(
            <div className="container h-100 divCenterScreen">
                <div className="row h-100 justify-content-center align-items-center">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Introduce Email"/>
                            <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo con alguien mas.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Recuérdame</label>
                        </div >
                        <div  className="btn-toolbar justify-content-center" >
                            <button type="submit" className="btn btn-primary btn-sm mb-2 mr-2 ">Ingresar</button>
                            <button type="reset" className="btn btn-primary btn-sm mb-2 mr-2">Cancel</button>   
                        </div>
                        <div className="row h-100 justify-content-center"> 
                            <h6>¿Eres nuevo?</h6>
                        </div>
                        <div className="row h-100 justify-content-center">
                            <button href="/register" className="btn btn-primary btn-sm mb-2 mr-2 ">Crea tu Cuenta</button>
                        </div>

                    </form>
                </div>
            </div>   
        )
    }
}

export default Signin