import React, {Fragment} from 'react';
import Task from './Task'

const ListTask = () => {

  const taskProject = [
    { name: 'Select Platform', status: true },
    { name: 'Select Theme', status: false },
    { name: 'Select Payment system', status: false },
    { name: 'Select Hosting', status: true },
  ]

  return ( 
    <Fragment>
    <h2>Project: Online Shop</h2>

    <ul className="listado-tareas">
      {taskProject.length === 0 
      ? (<li className="tarea"><p>There are no Tasks</p></li>)
       : taskProject.map(task=>(<Task task={task}/>))}
    </ul>
    <button
      type="button"
      className="btn btn-eliminar"
    >Delete Project &times;</button>
    </Fragment>
   );
}
 
export default ListTask;