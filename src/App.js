import React from 'react';
import './App.css';
import Header from './components/header/header.com';
import Homepage from './pages/homepage';
import Worldmap from './pages/worldmap/worldmap';
import About from './pages/about/about';
import Newsletter from './pages/newsletter/newsletter'
import { Route , Switch } from 'react-router-dom';
import Articlen from './components/article/article.comp';
class App extends React.Component {

  constructor(){
    super();
    this.state= {
      gotinfo: false,
      data : ''
    }
  }
  
  
  async componentDidMount(){
    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          gotinfo: true,
          data: result
        });
        }
    )
    
  };
      render(){
         const {gotinfo , data} = this.state;
         
          return gotinfo ? (
            <div>
              <Header/>
              <Switch>
                <Route exact path={["/", "/cov-try1"]}  render={(props) => <Homepage {...props} data={data}/>} />
                <Route  path="/worldmap"  render={(props) => <Worldmap {...props} data={data}/>} />
                <Route path="/about" component={About}/>
                <Route exact path="/newsletter" component={Newsletter}/>
                <Route path="/newsletter/:articleid" component={Articlen}/>
              </Switch>
              
          </div>
            
        ): <div className="loading-cont">
        <p className="loading-text">Loading</p>
        <div className="loading"></div>
      </div> ;
        
    }
}

export default App;
