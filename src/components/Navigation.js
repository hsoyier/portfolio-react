import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <React.Fragment>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/project">Project</NavLink>
      <NavLink to="/about">About</NavLink>
    </React.Fragment>
  )
}

export default Navigation
