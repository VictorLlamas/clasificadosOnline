import React from 'react'

function Homepage (){
    return(
        <div className="container h-100 .align-items-xl-center">
            <div className="input-group h-100 justify-content-center align-items-center " >
                <input type="text" className="form-control" placeholder="Ingresa busqueda" aria-label="main-search"/>
                <div class="input-group-append">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tipo de Busqueda</button>
                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a className="dropdown-item" href="#">Compra</a>
                        <a className="dropdown-item" href="#">Renta</a>
                        <a className="dropdown-item" href="#">Venta</a>
                    </div>
                </div>
                <div>
                    <button className="btn btn-outline-primary" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search</button>
                </div>
            </div>    
        </div>
    )
}

export default Homepage