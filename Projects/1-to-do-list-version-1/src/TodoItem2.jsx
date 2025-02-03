function TodoItem2(){
  let todoname='Go To College';
  let tododate='05/01/2024';
  
return (
  <div class="container">
     <div class="row todoitem-container">
          <div class="col-6">{todoname}</div>
          <div class="col-4">{tododate}</div>
          <div class="col-2"><button type="button" class="btn btn-danger kg-button">Delete.</button></div>
        </div>

        </div>
)

}
export default TodoItem2;