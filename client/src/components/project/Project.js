import React from 'react';

const Project = ({project}) => {
  const{name, id}= project
  return ( 
    <li>
      <button
        type="button"
        className="btn btn-blank"
      >{name}</button>
    </li>
   );
}
 
export default Project
