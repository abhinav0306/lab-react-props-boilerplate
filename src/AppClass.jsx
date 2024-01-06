import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    this.data=this.imageData()
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
