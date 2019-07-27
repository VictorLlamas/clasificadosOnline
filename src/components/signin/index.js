import React, { Component }from 'react'

class Signin extends Component{
    render(){
        return(
            <form>
                <div className="form-group">
                    <label htmlfor="email">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Introduce Email"/>
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo con alguien mas.</small>
                </div>
                <div className="form-group">
                    <label htmlfor="password">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlfor="exampleCheck1">Recuérdame</label>
                </div >
                <div  class="btn-toolbar" >
                    <button type="submit" className="btn btn-primary btn-sm mb-2 mr-2 ">Ingresar</button>
                    <button type="reset" className="btn btn-primary btn-sm mb-2 mr-2">Cancel</button>   
                </div>
                
            </form>
        )
    }
}

export default Signin