import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  // code here
  render(){
    this.data=this.props.props;
    let galStyle={
      display:"grid",
      gridTemplateColumns:"repeat(2,1fr)",
    }
    return(
      <>
      <h1 style={{textAlign:"center",fontSize:"50px"}}>Kalvium Gallary(Class Component)</h1>
    <div style={galStyle}>
      {this.data.map((el)=>(
        <img key={el.id} src={el.img} style={{ width: '550px', margin: 'auto', marginBottom:"50px" }}/>
      ))}

    </div>
      </>
    )
  }
}
