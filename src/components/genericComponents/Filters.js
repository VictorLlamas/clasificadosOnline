import React, { Component } from 'react'

class Filter extends Component{
    render(){
        
        return(
        <div className="container border rounded-lg p-md-4 mt-3">
            <div>
                <button type="button" className="btn btn-primary btn-sm float-right" >Filtrar</button>
            </div>
            <div>
                <label>Tipo de Propiedad</label>
                <div >
                    <select id="inputSearch" className="form-control">
                        <option>Todos</option>
                        <option>Departmento</option>
                        <option>Casa</option>
                        <option>Terreno</option>
                        <option>Oficina</option>
                        <option>Otros</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="propertyType" id="all" value="1" defaultChecked/>
                    <label className="form-check-label" htmlFor="all"> Todos</label>    
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="propertyType" id="newDevelop" value="2"/>
                    <label className="form-check-label" htmlFor="newDevelop">Nuevos Desarrollos</label>
                </div>
            </div>
            <div>
                <label> Rango de Precio</label>
            </div>
            <div className="row">
                <div className="col">
                    <label>Desde</label>
                    <select className="form-control">
                        {['$0','$500,000','$1000,000','$1,500,000','$2,000,000','$2,500,000','$3,000,000','$4,000,000',
                          '$5,000,000','$6,000,000', '$8,000,000'].map((value, index)=>(
                                        <option key={index}>{value}</option>
                        ))}
                    </select>
                </div>
                <div className="col">
                    <label>Hasta</label>
                    <select className="form-control">
                        {['$0','$500,000','$1000,000','$1,500,000','$2,000,000','$2,500,000','$3,000,000','$4,000,000',
                          '$5,000,000','$6,000,000', '$8,000,000', '$+10,000,000'].map((value, index)=>(
                                        <option key={index}>{value}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <label> Amenidades</label>
                    <div>
                        <label>Recamaras</label>
                        <select className="form-control">
                            {['1', '2', '3', '4','5+'].map((value, index)=>(
                                <option key={index}>{value}</option>
                            ))}
                        </select>
                        <label>Baños</label>
                        <select className="form-control">
                            {['1', '1.5', '2', '2.5','3+'].map((value, index)=>(
                                <option key={index}>{value}</option>
                            ))}
                        </select> 
                        <label>Estacionamiento</label>
                        <select className="form-control">
                            {['1', '2', '3', '4','5+'].map((value, index)=>(
                                <option key={index}>{value}</option>
                            ))}
                        </select>
                    </div>
            </div>
            <div>
                <label>Superficie</label>
                    <div>
                        <label>Terreno<span><sup>(m2)</sup></span></label>
                        <div className="row">
                            <div className="col">
                                <select className="form-control">
                                    {['Desde','100','200','300','400','600','800','1000','1500','2000','3000'].map((value, index)=>(
                                        <option key={index}>{value}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col">
                                <select className="form-control">
                                    {['Hasta','100','200','300','400','600','800','1000','1500','2000','3000','4000+'].map((value, index)=>(
                                       <option key={index}>{value}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                    <label>Construccion<span><sup>(m2)</sup></span></label>
                    <div className="row">
                        <div className="col">
                            <select className="form-control">
                                {['Desde','100','200','300','400','600','800','1000','1500','2000','3000'].map((value, index)=>(
                                    <option key={index}>{value}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col">
                            <select className="form-control">
                                {['Hasta','100','200','300','400','600','800','1000','1500','2000','3000','4000+'].map((value, index)=>(
                                   <option key={index}>{value}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        )
    }

}

export default Filter