import React from 'react';
import './subscribe.comp.scss';
import Input from '../input/input.comp';
import {firestore} from '../../firebase/firebase'
const handleSubmit =(e)=>{
    e.preventDefault();
    var currentD = new Date() ; 
    document.getElementById('parag').classList.add("didsubs");
    firestore.collection('emails')
        .doc(`${Math.random(100)}`)
        .set({createdAt : currentD,
            email : e.target[0].value
        })

}
const Subsform = ()=>(
    <form  className="Subs-form" onSubmit={(e)=>(handleSubmit(e))}>
               <Input type="email" className="subsinp" name="subscribe" placeholder="E-mail Adress" />
               <button type="submit" className="submit">SUBSCRIBE</button>
               <p id="parag" className="green  didsub">{"Thank you for your subscription :)"}</p>
    </form>
)
export default Subsform;