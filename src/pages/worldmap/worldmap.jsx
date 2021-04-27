 import React from 'react';
import Mapp from '../../components/map/map.parent';
import Carddata from '../../components/card-info/card-info-comp';
import './worldmap.style.scss';
import Inputf from '../../components/input/input.comp';

class Worldmap extends React.Component {
   constructor(){
      super();
      this.state={
         country : '',
         countryinp:[]
      }
   }
   handleclick = (e) =>{
        
        this.setState({country: e.target.getAttribute("data-index") })
   }
   handlechange = (e) =>{
      var val= e.target.value.toLowerCase();
      var count = 0, elements=[];
      if(val===''){
         elements=[];
         this.setState(prevState => ({
            countryinp: [...elements]
          }))
      }else{
         for(let [index , value] of this.props.data.Countries.entries()){
         if(count===5){
            break;
         }
         if(value.Slug.includes(val)){
            count ++;
            elements.push(index)
            
         }
      }
      this.setState(prevState => ({
         countryinp: [...elements]
       }))
      }
      
   }
   clearInp = ()=>{
      document.querySelector('.worldmap-search .forminp').value="";
      this.setState(prevState => ({
         countryinp: []
       }))
   }
   render(){

      
      const countryinp = this.state.countryinp

      return(

         
         <div className="worldmap">
         <p></p>
         <section className="map-section">
            <div className="worldmap-heading">
                <h2 className="worldmap-header">Select a Country</h2> 
               <span className="worldmap-search">
               <Inputf type="text" className="forminp" name="search" placeholder=" Or Search By Name" handlechange={this.handlechange} />
              <i className="fas fa-search" onClick={this.clearInp}></i>
              
                <ul className="search-item-cont">
                   {countryinp.map(el=>
                     ( <li key={el} data-index={el} onClick={(e)=>(this.handleclick(e))}>
                        {this.props.data.Countries[el].Country} </li>)
                   )} 
                   
                   </ul></span> 
            </div>
            <Mapp data={this.props.data.Countries} handleclick={this.handleclick} dontshowno={true} />
         </section>
         
         
         <Carddata head1="Total Cases" head2="Daily Increase" data={this.props.data.Countries[parseInt(this.state.country)]}/>
      </div>
   
      )
   }
 
   }
export default Worldmap;