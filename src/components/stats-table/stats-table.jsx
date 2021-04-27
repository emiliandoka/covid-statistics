import React from 'react';
import './stats-table.scss'
import Tablepage from './table-page.comp';
class statsTable extends React.Component{
    constructor(props){
        super(props);
       console.log(props)
        this.state={
            sortedby : '',
            itemPerpage: 10,
            noOfpages:20,
            page: 0,
            data: this.props.data
        } 
    }
    
    
    setPagenumber = (e) =>{
        var x = parseInt(e.target.options[e.target.options.selectedIndex].value)
        this.setState({itemPerpage : x,
                        noOfpages: Math.ceil(this.props.data.length/x),
                    page:0})
        }
    
    
    setItemsPerpage = (e)=>{
        console.log( e.target.getAttribute("data-index"))
        this.setState({page : e.target.getAttribute("data-index")})
    }
    prevPage = ()=>{
        if(this.state.page>0){
            this.setState({page : this.state.page-1})
        }
    }
    nextPage = ()=>{
        if(this.state.page<this.state.noOfpages-1){
            this.setState({page : this.state.page+1})
        }
    }
    sortbyCountry = ()=>{
        this.setState({data: this.props.data})
    }
    sortbyCases = ()=>{
        var casearr = [...this.props.data];
        for(let i=0; i<this.props.data.length; i++){
             let temp;
            for(let j=i; j<this.props.data.length; j++){
               
                if(casearr[i].TotalConfirmed<casearr[j].TotalConfirmed)
                 {  temp = casearr[i] ;
                    casearr[i]=casearr[j];
                    casearr[j]=temp;
                }
                
            }
         
        }
  
        this.setState({data:casearr});
    }
    sortbyHeals = ()=> {
        var casearr = [...this.props.data];
        for(let i=0; i<this.props.data.length; i++){
             let temp;
            for(let j=i; j<this.props.data.length; j++){
               
                if(casearr[i].TotalRecovered<casearr[j].TotalRecovered)
                 {  temp = casearr[i] ;
                    casearr[i]=casearr[j];
                    casearr[j]=temp;
                }
                
            }
         
        }
  
        this.setState({data:casearr});
    }
    sortbyDeaths = ()=>{
        var casearr = [...this.props.data];
        for(let i=0; i<this.props.data.length; i++){
             let temp;
            for(let j=i; j<this.props.data.length; j++){
               
                if(casearr[i].TotalDeaths<casearr[j].TotalDeaths)
                 {  temp = casearr[i] ;
                    casearr[i]=casearr[j];
                    casearr[j]=temp;
                }
                
            }
         
        }
  
        this.setState({data:casearr});
    }
    
    render(){

        var {itemPerpage , page , data} = this.state;
       
        
        return(
        <section className="table-stats">
            <p className="alert">Click on the headings to sort by type!</p>
            <table cellSpacing="0">
              <tr className="the-header">
                    <td className="index">&nbsp;&nbsp;</td>
                    <td className="tableh coun" onClick={this.sortbyCountry}>Country   <span> <i className="fas fa-sort"></i></span></td>
                    <td className="tableh" onClick={this.sortbyCases}>Corona   <span> <i className="fas fa-sort"></i></span><br></br> Cases</td>
                    <td className="tableh" onClick={this.sortbyDeaths}>Deaths  <span> <i className="fas fa-sort"></i></span></td>
                    <td className="tableh"  onClick={this.sortbyHeals}>Recovered  <span> <i className="fas fa-sort"></i></span></td>
                </tr>
              
                    { data.slice(page*itemPerpage , (page*itemPerpage)+itemPerpage).map((country, index) =><tr key={index}>
                    <td>{page*itemPerpage+index+1}</td>
                    <td>{country.Country}</td>
                    <td className="blue">{country.TotalConfirmed.toLocaleString()}</td>
                    <td  className="red">{country.TotalDeaths.toLocaleString()}</td>
                    <td  className="green">{country.TotalRecovered.toLocaleString()}</td>
                    </tr>)}
               
            </table>
             <ul className="pages-list">
                <li className="pagenum" onClick={this.prevPage}><i className="fas fa-angle-left"></i></li>
                   
                    <Tablepage noOfpages={this.state.noOfpages} handleClick={this.setItemsPerpage}/>
                
                 <li className="pagenum"  onClick={this.nextPage}><i className="fas fa-angle-right"></i></li>
                <li>
                    <select id="pagenumbers" onChange={this.setPagenumber}>
                        <option value="10">10/Page</option>
                         <option value="20">20/Page</option>
                         <option value="50">50/Page</option>
                         <option value="100">100/Page</option>
                    </select>
                </li>
            </ul>
         </section>
        )
    }  
}

export default statsTable;