import React from 'react';

 class pageselector extends React.Component{
    constructor(){
        super();
        this.state={
            selectpage : true
        }
    }

    setpage10=()=>{
        this.setState({selectpage:false})
    }
    setpage1 =()=>{
        this.setState({selectpage:true})
    }
render(){

    var pageNum = [];
    let i , count = 0; i=0 ;
   if(this.state.selectpage ){
      
    } else if(this.props.noOfpages>11){
        i=10
        pageNum.push(<li className="pagenum f-left" onClick={this.setpage1}> &nbsp;<i className=" fas fa-ellipsis-v"></i></li>)
    }
       

    for(i; i<this.props.noOfpages;i++){
        if(count===10) {   
           break;
        }
        count ++;
        pageNum.push(<li className="pagenum" key={i} data-index={i} onClick={this.props.handleClick}> {i+1} </li>)
    }
    if(this.state.selectpage && this.props.noOfpages>=11){
        pageNum.push(<li className="pagenum f-right" onClick={this.setpage10}>&nbsp;<i className=" fas fa-ellipsis-v"></i></li>)
       
    }


    return pageNum ;
}

}

export default pageselector;