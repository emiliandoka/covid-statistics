import React from 'react';
import './asticle.comp.style.scss';
import POST_DATA from '../posts and social/postdata';
import Post from '../posts/post.comp';
const Articlen = (match)=>{
  
    const id = match.match.params.articleid - 1;  console.log(POST_DATA[id].imguUrl);
    return(  
        <section className="newsletter">
            <p></p> 
            
            <article className="article">
                
                <h2 className="post-title">{POST_DATA[id].title}</h2>
                <span className="createdon">Created on {new Date().toJSON().slice(0,10).replace(/-/g,'/')} by E.D <br></br></span>

                <img alt={POST_DATA[id].imgAlt} src={POST_DATA[id].imguUrl}/>
                <div className="post-contents">
                <p className="post-shortdes">{POST_DATA[id].text.split('.').map((val, index)=>{
                    if(index%2===0){return `${val}. \n \n `}
                    else return `${val}.`
                })}</p>
                </div>
                <h2 className="recent">Recent Posts</h2>
                <section className="recent-p">
                
                {
                    POST_DATA.map((pos,index)=>{
                        if(index!==id){
                            return <Post key={pos.id} elid={pos.id} className={'post'}
                                title={pos.title} imgAlt={pos.imgAlt} imgUrl={pos.imguUrl} text={pos.text.substr(0, 130)}/>
                        }
                    })
                }
            </section>
            </article>

            
        </section>  
   
    
    )
}
export default Articlen;