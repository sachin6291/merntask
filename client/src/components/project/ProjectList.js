import React from 'react';
import Project from './Project'

const ProjectList = () => {

  const projects =[
    {name:'online shop'},
    {name:'internet'},
    {name:'web design'}
  ]

  return ( 
    <ul className="listado-proyectos">
      {projects.map(project=>(
      <Project
        project={project}
      />))}
    </ul>
   );
}
 
export default ProjectList;