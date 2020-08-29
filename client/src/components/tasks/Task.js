import React, { useContext } from 'react';
import taskContext from '../../context/tasks/taskContext'
import projectContext from '../../context/projects/projectContext'


const Task = ({task}) => {

  const projectsContext = useContext(projectContext)
  const {project} = projectsContext

  const [selectedProject] = project

  const tasksContext = useContext(taskContext)
  const { deleteTask, getTasks} = tasksContext

  //function to delete task
  const taskDelete = id =>{ 
    deleteTask(id)
    getTasks(selectedProject.id)
}
  const { name, status, id} = task
  return ( 
    <li className="tarea sombra">
      <p> {name} </p>
    <div className="estado">
      {status
      ?
        (
          <button
            type="button"
            className="completo"
          >Complete</button>
        )
      :
        (
          <button
            type="button"
            className="incompleto"
          >Inomplete</button>
        )
      } 
    </div>
    <div className="acciones">
      <button
        type="button"
          className="btn btn-primario"
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