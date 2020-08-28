import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext'


const FormTask = () => {

  //get the project state in the context
  const projectsContext = useContext(projectContext)
  const { project } = projectsContext

  // project is null
  if (!project) return null 

  //destructurin of an array of objects
  const [selectedproject] = project

  return ( 
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name..."
            name="name"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario brn-submit btn-block"
            value="Add Task" 
          />
        </div>
      </form>
    </div>
   );
}
 
export default FormTask;