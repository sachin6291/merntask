import React from 'react';
import NewProject from '../project/NewProject'
import ProjectList from '../project/ProjectList'

const Sidebar = () => {
  return ( 
    <aside>
      <h1>MERN<span>Task</span></h1>
      <NewProject/>
      <div className="proyectos">
        <h2>Your Projects</h2>
        <ProjectList/>
      </div>
    </aside>
   );
}
 
export default Sidebar;