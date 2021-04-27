import React from 'react';
import './post.comp.scss';
import {Link} from 'react-router-dom';

const postComp = (props)=> (

    <article className={props.className}>
        <img alt={props.imgAlt} src={props.imgUrl}/>
        <div className="post-contents">
          <Link style={{ textDecoration: 'none' }} to={`/newsletter/${props.elid}`} >   <h2 className="post-title">{props.title}</h2></Link>
        <p className="post-shortdes">{props.text}...</p>
        <Link  to={`/newsletter/${props.elid}`} > Learn More...</Link>
        </div>
    </article>

)
export default postComp;