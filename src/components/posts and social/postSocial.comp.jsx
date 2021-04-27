import React from 'react';
import './postSocial.style.scss';
import post_data from './postdata';
import Post from '../posts/post.comp';
import { TwitterTimelineEmbed} from 'react-twitter-embed';
const postandS = (props)=>(
    <section className="news-section">{
    post_data.map((el, index ) => {
                if(props.className){
                    
                        return <Post key={el.id} elid={el.id} className={props.className? 'post-n': 'post'}
                    title={el.title} imgAlt={el.imgAlt} imgUrl={el.imguUrl} text={props.className? el.text.substr(0, 260):el.text.substr(0, 130)}/>
                    
                }
                else if(index<3){
                     return <Post key={el.id} elid={el.id} className={props.className? 'post-n': 'post'}
                title={el.title} imgAlt={el.imgAlt} imgUrl={el.imguUrl} text={props.className? el.text.substr(0, 260):el.text.substr(0, 130)}/>
        
                }
              })
        }
           {props.className ? <div className="tweets">
               <TwitterTimelineEmbed sourceType="profile" screenName="WHO" options={{height: 400 , width: 580}} />
               <TwitterTimelineEmbed sourceType="profile" screenName="covid19tracking" options={{height: 400 , width: 580}} />

           </div>
             : null  }


       </section>
)

export default postandS;