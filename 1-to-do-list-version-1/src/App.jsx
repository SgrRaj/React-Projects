import AppName from "./components/AppName";
import AppToDo from "./AppToDo";
import TodoItem1 from "./TodoItem1";
import TodoItem2 from "./TodoItem2";
import './App.css';


function App() {
  return (
    <center class="todo-container">
    <AppName></AppName>
    <AppToDo></AppToDo>
    <div class='todoitem-container'>
    <TodoItem1/>
    <TodoItem2/>
    </div>
    
     
      
    </center>
  );
}

export default App;
