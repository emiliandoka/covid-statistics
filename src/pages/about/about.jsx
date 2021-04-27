import React from  'react';
import "./about.style.scss";
import User from '../../media/user.png';
import Subsform from '../../components/subscribe/subscribe.comp';
const About =()=>(
    <div className="about">
        <p></p>
        <section className="about-page">
            <h2 className="tittle">About</h2>
            
            
            <div className="contents">
                <div className="about-site">
               This is a site dedicatied to a worldwide virus known as Covid-19. Where you can see statistics such as the number of people infected, dead and healed. There is also a dedicated newslettet for the most recent news related to coronavirus from all around the world.
               <br></br><br></br><br></br>The data source of these statistics is from a public api  called <a href="https://covid19api.com/">Covid 19 Api</a>
               <br></br><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate, commodi temporibus rerum dolores dolorem, in vel numquam reiciendis sint ut, nulla itaque aliquam aut nisi. A id dicta nobis.
               <br></br>
               <br></br> Subscribe to our newsletter for more up to date news about CoronaVirus :
                <Subsform/>
            </div>
                <div className="about-userinfo">
                <img src={User} alt="about" className="about-creator"/>
               <h3 className="about-creatname"> E.Mjeshtri</h3>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa adipisci, quod exercitationem perferendis iusto error voluptates consequuntur quasi dolor quibusdam </p>
               <i className="fab fa-facebook-f"></i><i className="fab fa-instagram"></i><i className="fab fa-linkedin-in"></i>
            </div>
            
            </div>
            
        </section>
    </div>
        
)

export default About;