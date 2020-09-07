import React, {Fragment, useContext} from 'react';
import Task from './Task'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ListTask = () => {

  //get the project state from the context
  const projectsContext = useContext(projectContext)
  const { project, deleteProject } = projectsContext

  //get the task state from the context
  const tasksContext = useContext(taskContext)
  const { tasksproject } = tasksContext
  
  // project is null
  if(!project)return(<h2>Select a Project</h2>)

  //destructurin of an array of objects
  const [selectedproject] = project



  const taskProject = tasksproject 
  

  return ( 
    <Fragment>
    <h2>Project: {selectedproject.name}</h2>

    <ul className="listado-tareas">
      {taskProject.length === 0 
      ? (<li className="tarea"><p>There are no Tasks</p></li>)
       : <TransitionGroup>
        {taskProject.map(task=>(
          <CSSTransition
            key={task._id}
            timeout={200}
            classNames="tarea"
          >
            <Task  task={task}/>
          </CSSTransition>
        ))}
        </TransitionGroup>
      }     
    </ul>
    <button
      type="button"
      className="btn btn-eliminar"
      onClick={()=>deleteProject(selectedproject._id)}
    >Delete Project &times;</button>
    </Fragment>
   );
}
 
export default ListTask;