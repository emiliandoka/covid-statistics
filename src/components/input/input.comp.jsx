import React from 'react';
import './input.comp.style.scss';
const Inputf= (props)=>(
    <input name={props.name} className={props.className} onChange={props.handlechange ? (e)=> props.handlechange(e): null} type={props.type} placeholder={props.placeholder} required></input>
)

export default Inputf;