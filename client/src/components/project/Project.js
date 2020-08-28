import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext'

const Project = ({project}) => {

  //get the project state in the context
  const projectsContext = useContext (projectContext)

  const { currentProject } = projectsContext

  const{name, id}= project
  return ( 
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick = {()=>currentProject(id)}
      >{name}</button>
    </li>
   );
}
 
export default Project
