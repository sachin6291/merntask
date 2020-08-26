import React from 'react';

const Task = ({task}) => {
  const { name, status} = task
  return ( 
    <li className="tarea sombra">
      <p> {name} </p>
    <div className="estado">
      {status
      ?
        (
          <button
            type="button"
            className="completo"
          >Complete</button>
        )
      :
        (
          <button
            type="button"
            className="incompleto"
          >Inomplete</button>
        )
      } 
    </div>
    <div className="acciones">
      <button
        type="button"
          className="btn btn-primario"
      >Edit</button>
        <button
          type="button"
          className="btn btn-secundario"
        >Delete</button>
    </div>
    </li>
   );
}
 
export default Task;