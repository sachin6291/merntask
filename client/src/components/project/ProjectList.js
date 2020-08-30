import React, { useContext, useEffect } from 'react';
import Project from './Project'
import projectContext from '../../context/projects/projectContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const ProjectList = () => {

  //Extract project from projectState(context)

  const projectsContext = useContext(projectContext)
  const { projects, getProjects} = projectsContext

  //obtain projects when components load
  
  useEffect(()=>{
    getProjects()
    // eslint-disable-next-line
  },[])
  
  
  if (projects.length === 0) return (<p>Click on a New Project to start</p>)

  return ( 
    <ul className="listado-proyectos">
      <TransitionGroup>
       {projects.map(project=>(
         <CSSTransition
           key={project.id}
           timeout={200}
           classNames="proyecto"
         >
           <Project
            
             project={project}
           />
         </CSSTransition>
       ))}
      </TransitionGroup>
    </ul>
   );
}
 
export default ProjectList;