import React from 'react';
import Carddata  from '../components/card-info/card-info-comp';
import Statstable from '../components/stats-table/stats-table';
import Postandsoc from '../components/posts and social/postSocial.comp';
import Mapp from '../components/map/map.parent';
import Subsform from '../components/subscribe/subscribe.comp';
import './homepage.style.scss';
const handleclicknull=()=>{
 return
}
const Homepage= (props)=>(
              
            <section className="home">
                
                <p></p>
                  <div className="top">
                      
                      <div className="prov">
                      <Mapp data={props.data.Countries} handleclick={handleclicknull} />
                          <section className="info">
                             <Carddata head1="Global Cases" head2="Global Daily Increase" data={props.data.Global}/>
                             
                             <div>
                                 <Statstable data={props.data.Countries}/>
                                 <p className="subs-text">Subscribe to our newsletter</p>
                                 <Subsform/> 
                            </div> 

                              
                          
                       
                          </section>
                         
                      </div>
                      
                   </div>
                   <section>
                       <h2>Recent posts</h2>
                       <Postandsoc />
                   </section>
                    


              </section>

    
)
export default Homepage