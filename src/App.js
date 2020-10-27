import React from 'react';
import './App.css';
import ExamState from './components/context/ExamState';
import LeftNav from './components/LeftNav';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Exams from './components/Exams';
import Profile from './components/Profile';
import Users from './components/Users';
import CreateQues from './components/CreateQues';

const App = () => {
  return (
    <ExamState>
      <Router>
        <div className="App">
          <Navbar/>
          <LeftNav/>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/exams" component={Exams} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/QuesBank" component={CreateQues}/>
          </Switch>
        </div>
      </Router>
    </ExamState>
  );
}
export default App;
