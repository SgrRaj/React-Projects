let CurrentTime=()=>{
let currentdate=new Date();


  return <p className="lead">This is the Current Time: {currentdate.toLocaleDateString()} - {currentdate.toLocaleTimeString()}</p>
}

export default CurrentTime;