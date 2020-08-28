import React, { useContext, useEffect } from 'react';
import Project from './Project'
import projectContext from '../../context/projects/projectContext'

const ProjectList = () => {

  //Extract project from projectState(context)

  const projectsContext = useContext(projectContext)
  const { projects, getProjects} = projectsContext

  //obtain projects when components load
  
  useEffect(()=>{
    getProjects()
  },[])
  
  // console.log(projects)
  
  if (projects.length === 0) return (<p>Click on a New Project to start</p>)

  return ( 
    <ul className="listado-proyectos">
      {projects.map(project=>(
      <Project
        key={project.id}
        project={project}
      />))}
    </ul>
   );
}
 
export default ProjectList;