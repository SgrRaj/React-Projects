function Hello(){
  let myName="Sagar";
  let fullName=()=>{
    return 'Sagar Raj';
  }

  return <p>Hello! I am {fullName()}</p>
}

export default Hello;