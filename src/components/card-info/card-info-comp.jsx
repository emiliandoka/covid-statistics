import React from 'react';
import './card-info-style.scss';
//import data from '../../data-src';

const Cardata = (props)=>(
            <div className="stats">
                <section className="card">
                            <h1 className="card-header">{props.head1}</h1>
                            <span className="card-num blue">{props.data ? props.data.TotalConfirmed.toLocaleString(): "--"}</span>
                            <span className="card-text">Cases</span>
                            <span className="card-num green">{props.data ? props.data.TotalRecovered.toLocaleString(): "--"}</span>
                            <span className="card-text">Healed</span>
                            <span className="card-num red">{props.data ? props.data.TotalDeaths.toLocaleString(): "--"}</span>
                            <span className="card-text">Deaths</span>
                        </section>
                        <section className="card">
                            <h1 className="card-header">{props.head2}</h1>
                            <span className="card-num blue">{ props.data ? props.data.NewConfirmed.toLocaleString(): "--"}</span>
                            <span className="card-text">Cases</span>
                            <span className="card-num green">{props.data? props.data.NewRecovered.toLocaleString(): "--"}</span>
                            <span className="card-text">Healed</span>
                            <span className="card-num red">{props.data?props.data.NewDeaths.toLocaleString(): "--"}</span>
                            <span className="card-text">Deaths</span>
                        </section>
                </div>  
            )
        
  

export default Cardata;


/*
  <section className="card">
                    <h1 className="card-header">{header}</h1>
                    <span className="card-num blue">{data.Global.TotalConfirmed}</span>
                    <span className="card-text">Cases</span>
                    <span className="card-num green">{data.Global.TotalRecovered}</span>
                    <span className="card-text">Healed</span>
                    <span className="card-num red">{data.Global.TotalDeaths}</span>
                    <span className="card-text">Deaths</span>
                </section>

*/