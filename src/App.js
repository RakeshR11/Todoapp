import { useState } from "react";
import CustomForm from "./Components/CustomForm";
import TaskList from "./Components/TaskList";
import EditForm from "./Components/EditForm";
function App() {
  const[task,setTask]=useState([]);
  const[editedTask,SetEditedTask]=useState(null);
  const[isEditing,SetIsEditing]=useState(false);
  const[PreviousFocusEl,setPreviousFocusEl]=useState(null);

  const addTask=(task)=>{
    setTask(prevState=>[...prevState,task])
  }
  const deleteTask=(id)=>{
    setTask(prevState=>prevState.filter(t=>(t.id!== id)));
  }
  const toggleTask=(id)=>{
    setTask(prevState=>prevState.map(t=>(t.id == id
      ?{...t,checked:!t.checked}:t)));
  }
  const updateTask=(task)=>{
    setTask(prevState=>prevState.map(t=>(t.id == task.id
      ?{...t,name:task.name}:t)));
      closeEditMode();
  }
  const closeEditMode =()=>{
    SetIsEditing(false);
    PreviousFocusEl.focus();
  }
  const enterEditMode=(task)=>{
    SetEditedTask(task);
    SetIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }
  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {
        isEditing &&(
          <EditForm
      editedTask={editedTask}
      updateTask={updateTask}
      closeEditMode={closeEditMode}/>
        )
      }
      
      <CustomForm addTask={addTask}/>
      {task &&(
       <TaskList task={task}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        enterEditMode={enterEditMode}/>)}
    </div>
  );
}

export default App;
