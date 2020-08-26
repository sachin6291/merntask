import React from 'react';
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Projects from './components/project/Projects'
import ProjectState from './context/projects/projectState'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <ProjectState>
      <Router>
        <Switch>
          <Route exact path ="/" component={Login}/>
          <Route exact path ="/sign-up" component={SignUp}/>
          <Route exact path ="/projects" component={Projects}/>
        </Switch>
      </Router>
    </ProjectState>
  );
}

export default App;
