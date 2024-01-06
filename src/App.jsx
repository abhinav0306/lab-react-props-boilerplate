import './App.css';



let galStyle={
  display:"grid",
  gridTemplateColumns:"repeat(2,1fr)",
}
function App(props) {
  // code here
  let data =props.props
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
