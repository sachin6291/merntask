import React, {Fragment, useContext} from 'react';
import Task from './Task'
import projectContext from '../../context/projects/projectContext'


const ListTask = () => {

  //get the project state in the context
  const projectsContext = useContext(projectContext)
  const { project, deleteProject } = projectsContext

  // project is null
  if(!project)return(<h2>Select a Project</h2>)

  //destructurin of an array of objects
  const [selectedproject] = project

  const {name, id}= selectedproject

  const taskProject = [
    { name: 'Select Platform', status: true },
    { name: 'Select Theme', status: false },
    { name: 'Select Payment system', status: false },
    { name: 'Select Hosting', status: true },
  ]
  

  return ( 
    <Fragment>
    <h2>Project: {name}</h2>

    <ul className="listado-tareas">
      {taskProject.length === 0 
      ? (<li className="tarea"><p>There are no Tasks</p></li>)
       : taskProject.map(task=>(<Task task={task}/>))}
    </ul>
    <button
      type="button"
      className="btn btn-eliminar"
      onClick={()=>deleteProject(id)}
    >Delete Project &times;</button>
    </Fragment>
   );
}
 
export default ListTask;