import React, { Component } from 'react'

class Filter extends Component{
    render(){
        
        return(
        <div className="">
            <div>
                <label>Property type</label>
                <div >
                    <select id="inputSearch" className="form-control">
                        <option>all</option>
                        <option>Departments</option>
                        <option>Houses</option>
                        <option>Lands</option>
                        <option>Officies</option>
                        <option>Others</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="all" id="all" value="1" checked/>
                    <label className="form-check-label" htmlFor="all"> All</label>    
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="newDevelop" id="newDevelop" value="2"/>
                    <label class="form-check-label" htmlFor="newDevelop">New Developments</label>
                </div>
            </div>
            <div>
                <label> Price Range</label>
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
                <label> Ammenities</label>
                    <div>
                        <label>Rooms</label>
                            {['1','2','3','4','5'].map(( number ) => (
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="roomsRadio" id={"roomsRadio"+ number} value={number}/>
                                    <label className="form-check-label" htmlFor={"roomsRadio"+ number}>{number}</label>
                                </div> 
                            ))}
                    </div>
                    <div>
                        <label>Bathrooms</label>
                        {['1','2','3','4','5'].map(( number ) => (
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="bathroomsRadio" id={"bathroomsRadio"+ number} value={number}/>
                                <label className="form-check-label" htmlFor={"bathroomsRadio"+ number}>{number}</label>
                            </div> 
                        ))}
                    </div>
                    <div>
                        <label>Parking</label>
                        {['1','2','3','4','5'].map(( number ) => (
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="parkingRadio" id={"inlineRadio"+ number} value={number}/>
                                <label className="form-check-label" htmlFor={"parkingRadio"+ number}>{number}</label>
                            </div> 
                        ))}
                    </div>
                
            </div>
            <div>
                <label>Features</label>
                    <div>
                        <label>Land<span><sup>(m2)</sup></span></label>
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
                    <label>Construction<span><sup>(m2)</sup></span></label>
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