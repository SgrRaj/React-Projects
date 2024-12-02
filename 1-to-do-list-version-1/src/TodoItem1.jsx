function TodoItem1(){
  let todoname='Buy Milk';
  let tododate='04/01/2024';
  
return (
  <div class="container">
     <div class="row todoitem-container">
          <div class="col-6">{todoname}</div>
          <div class="col-4">{tododate}</div>
          <div class="col-2"><button type="button" class="btn btn-danger kg-button">Delete</button></div>
        </div>

        </div>
)

}
export default TodoItem1;