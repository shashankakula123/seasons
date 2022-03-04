import React from "react";
import  ReactDOM  from "react-dom";
import SeasonDetails from "./SeasonDisplay";
import './index.css';
import "semantic-ui-css/semantic.min.css";
import CircularIndeterminate from "./CircularIndeterminate";

class App extends React.Component{
//  constructor(props){
//      super(props);
  
//  }

state={lat:null,errMessage:''}

 componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        position=> this.setState({lat:position.coords.latitude}),
        err=> this.setState({errMessage:err.message})
        

    );

 }


    render(){


       
        if(this.state.lat && !this.state.errMessage){
            return <div className="whole"><SeasonDetails lat={this.state.lat} /></div>
        }
        
        if(!this.state.lat && this.state.errMessage){
            return <div className="whole">error:{this.state.errMessage}</div>
        }
        return(<div className="whole"><CircularIndeterminate/></div>)
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));