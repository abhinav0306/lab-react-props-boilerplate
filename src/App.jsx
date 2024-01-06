import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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
let data=imageData()

let galStyle={
  display:"grid",
  gridTemplateColumns:"repeat(2,1fr)",
}
function App() {
  // code here
  return(
    <>
    <h1 style={{textAlign:"center",fontSize:"50px"}}>Kalvium Gallary(Functional Component)</h1>
    <div style={galStyle}>
      {data.map((el)=>(
        <img key={el.id} src={el.img} style={{ width: '550px', margin: 'auto', marginBottom:"50px" }}/>
      ))}

    </div>
    </>

  )
}

export default App;
