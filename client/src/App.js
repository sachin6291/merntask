import React from 'react';
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Projects from './components/project/Projects'
import ProjectState from './context/projects/projectState'
import TaskState from './context/tasks/taskState'
import AlertState from './context/alerts/alertState'
import AuthState from './context/authentication/authState'
import tokenAuth from './config/tokenAuth'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/routes/PrivateRoute'

//Check for token
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token)
}
function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path ="/" component={Login}/>
                <Route exact path ="/sign-up" component={SignUp}/>
                <PrivateRoute exact path ="/projects" component={Projects}/>
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
