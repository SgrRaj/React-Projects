function Random(){
  let number=Math.random()*100;
    return <h4>Random number is : {Math.round(number)}</h4>
}
export default Random;