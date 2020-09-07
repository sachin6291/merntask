import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const Project = ({project}) => {

  //get the project state from the context
  const projectsContext = useContext (projectContext)

  const { currentProject } = projectsContext



  //get the tasks state from the context
  const tasksContext = useContext(taskContext)

  const {getTasks} = tasksContext


  //Funcion to add current project
  const selectProject = id =>{
    currentProject(id) //select the current project
    getTasks(id) //filter tasks depending on the project selected
  }

  return ( 
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick = {()=>selectProject(project._id)}
      >{project.name}</button>
    </li>
   );
}
 
export default Project
