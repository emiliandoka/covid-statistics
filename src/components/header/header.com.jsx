import React from 'react';
import './header.comp.style.scss';
import Logo from '../../media/icon.png';
import {Link} from 'react-router-dom';

const burgermenu = ()=>{
    document.querySelector('.header-menu').classList.toggle('active')
    document.querySelector('.burger-menu').classList.toggle('active-burger')
    
    
    }

const Header = ()=>(

    <header className="header">
        
            <section className="logo">
                <Link to="/"><span className="logo-container">
                    <img src={Logo} alt="Site logo"/>
                </span>
                <h2 className="logo-title">Corona Time</h2></Link>
            </section>
           <div className="burger-menu" onClick={burgermenu}> </div> 
            <ul className="header-menu">
                <li key={1}>
                    <Link to="/" ><span className="icons"><i className="fas fa-home" ></i></span> 
                    <span onClick={burgermenu} className="header-items slow-1">Home </span>
                    </Link>
                </li>
                <li key={2}>
                        <Link to="/worldmap" > <span className="icons"><i className="fas fa-globe" ></i></span>
                         <span onClick={burgermenu} className="header-items slow-2">World Map</span>
                        </Link>
                </li>
                <li key={3}>
                        <Link to="/about" ><span className="icons"><i className="fas fa-user"></i></span> 
                        <span onClick={burgermenu}  className="header-items slow-3">About</span>
                        </Link>
                </li>
                <li key={4}>
                        <Link to="/newsletter" ><span className="icons"><i className="fas fa-newspaper"></i></span> 
                        <span onClick={burgermenu}  className="header-items slow-4">Newsletter</span>
                        </Link>
                </li>
                <span className="copyright-s">&copy; E.D</span>
            </ul>
           <span className="copyright">&copy; E.D</span>
            
       
    </header>
)
export default Header;