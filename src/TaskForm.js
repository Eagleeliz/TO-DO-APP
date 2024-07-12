import {useState} from "react";
export default function TaskForm({onAdd}){
    
    const[taskName,setTaskName]=useState("");
    
    function handleSubmit(ev){
ev.preventDefault();
onAdd(taskName);
setTaskName('');
    }
    return(
        
        <form onSubmit={handleSubmit}>
  <input type="text"
  value={taskName} 
  onChange={(e)=>setTaskName(e.target.value) } placeholder="Enter New Task..."/>
  <button>Add</button>
</form>
  
    );
}