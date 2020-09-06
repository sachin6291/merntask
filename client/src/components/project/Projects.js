import React,{useContext, useEffect} from 'react';
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'
import FormTask from '../tasks/FormTask'
import ListTask from '../tasks/ListTask'
import authContext from '../../context/authentication/authContext'

const Projects = () => {
  
  //get the information of authentication
  const authsContext = useContext(authContext)
  const { userAuthenticated} = authsContext

  useEffect(()=>{
    userAuthenticated()
  },[])

  return (
    <div className="contenedor-app">
      <Sidebar/>
      <div className="seccion-principal">
        <Header />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <ListTask />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Projects;