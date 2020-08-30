import React, { useContext } from 'react';
import taskContext from '../../context/tasks/taskContext'
import projectContext from '../../context/projects/projectContext'


const Task = ({task}) => {

  const projectsContext = useContext(projectContext)
  const {project} = projectsContext

  const [selectedProject] = project

  const tasksContext = useContext(taskContext)
  const { deleteTask, getTasks, changeTaskState, editCurrentTask} = tasksContext
  
  const { name, id} = task
  

  //function to delete task
  const taskDelete = id =>{ 
    deleteTask(id)
    getTasks(selectedProject.id)
}

  //function that changes the compleation state of each task
  const changeState = task =>{
    if(task.status){
      task.status=false
    }else{
      task.status=true
    }
    changeTaskState(task)
  }

  //function to edit the selected task
  const editTask = task =>{
    editCurrentTask(task)
  }

  return ( 
    <li className="tarea sombra">
      <p> {name} </p>
    <div className="estado">
      {task.status
      ?
        (
          <button
            type="button"
            className="completo"
            onClick={()=>changeState(task)}
          >Complete</button>
        )
      :
        (
          <button
            type="button"
            className="incompleto"
            onChange={()=>changeState(task)}
          >Inomplete</button>
        )
      } 
    </div>
    <div className="acciones">
      <button
        type="button"
        className="btn btn-primario"
        onClick={()=>editTask(task)}
      >Edit</button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick = {()=>taskDelete(id) }
        >Delete</button>
    </div>
    </li>
   );
}
 
export default Task;