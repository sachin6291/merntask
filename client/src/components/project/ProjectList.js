import React, { useContext, useEffect } from 'react';
import Project from './Project'
import projectContext from '../../context/projects/projectContext'
import alertContext from '../../context/alerts/alertContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const ProjectList = () => {

  //Extract project from projectState(context)

  const projectsContext = useContext(projectContext)
  const {message, projects, getProjects} = projectsContext

  //Extract alert from alertState(context)
  const alertsContext = useContext(alertContext)
  const { alert, showAlert} = alertsContext


  //obtain projects when components load
  
  useEffect(()=>{

    //in case of error
    if(message){
      showAlert(message.msg, message.category)
    }

    getProjects()
    // eslint-disable-next-line
  },[message])
  
  
  if (projects.length === 0) return (<p>Click on a New Project to start</p>)

  return ( 
    <ul className="listado-proyectos">

      {alert?(<div className={`alerta ${alert.category}`}>{alert.msg}</div>):null}

      <TransitionGroup>
       {projects.map(project=>(
         <CSSTransition
           key={project._id}
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