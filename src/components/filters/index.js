import React, { Component } from 'react'

class Filter extends Component{

    render(){
        
        return(
        <div class="mx-3">
            <div>
                <label>Tipo de Inmueble</label>
                <div >
                    <select class="form-control">
                        {['Todos','Departamentos','Casas','Terrenos','Oficinas','Locales','Bodegas','Otros'].map((value)=>(
                                        <option>{value}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <div class="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                    <label className="form-check-label" htmlfor="exampleRadios1"> Todos</label>    
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label class="form-check-label" for="exampleRadios2">Nuevos Desarrollos</label>
                </div>
            </div>
            <div>
                <label> Rango de Precios</label>
            </div>
            <div className="row">
                <div className="col">
                    <label>Desde</label>
                    <select className="form-control">
                        {['$0','$500,000','$1000,000','$1,500,000','$2,000,000','$2,500,000','$3,000,000','$4,000,000',
                          '$5,000,000','$6,000,000', '$8,000,000'].map((value)=>(
                                        <option>{value}</option>
                        ))}
                    </select>
                </div>
                <div className="col">
                    <label>Hasta</label>
                    <select className="form-control">
                        {['$0','$500,000','$1000,000','$1,500,000','$2,000,000','$2,500,000','$3,000,000','$4,000,000',
                          '$5,000,000','$6,000,000', '$8,000,000', '$+10,000,000'].map((value)=>(
                                        <option>{value}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <label> Amenidades</label>
                {['cuartos', 'baños', 'estacionamientos'].map( ( amenidad ) => (
                    <div>
                        <label>{amenidad}</label>
                        {['1','2','3','4','5'].map(( number ) => (
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id={"inlineRadio"+ number} value="option1"/>
                            <label className="form-check-label" htmlfor={"inlineRadio"+ number}>{number}</label>
                        </div> 
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <label>Superficie</label>
                {['Terreno', 'Construccion'].map((features)=>(
                    <div>
                        <label>{features} <span className="supidc">(m2)</span></label>
                        <div className="row">
                            <div className="col">
                                <select className="form-control">
                                    {['Desde','100','200','300','400','600','800','1000','1500','2000','3000'].map((value)=>(
                                        <option>{value}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col">
                                <select className="form-control">
                                    {['Hasta','100','200','300','400','600','800','1000','1500','2000','3000','4000+'].map((value)=>(
                                        <option>{value}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        )
    }

}

export default Filter