import { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleDel=(index)=>{
  {console.log(index)}
   const newTodos=todos.filter((todo,i)=> i!=index);
   setTodos(newTodos);
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (input) {
      setTodos([...todos, input]);
      setInput("");
    }
   
   
  };

  return (
    <div className="container">
      <div>
        <h1 className="todo-title">Todo List</h1>
        <div className="todo-input">
          <form className="form" onSubmit={handleClick}>
            <input 
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              className="input"
              type="text"
              placeholder="Enter your todo"
            />
            <button className="btn">Add</button>
          </form>
        </div>
      </div>
      <div>
        <div className="todos">
          <h2 className="title">Your Todos</h2>
          <ul className="todo">
           {todos.map((todo,index)=>(
            <li className="to-do" key={index}>{index+1}.{ todo}<span onClick={()=>{handleDel(index)}} className="del-btn"><DeleteOutlineIcon sx={{color:"blue"}}/></span></li>
           ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
