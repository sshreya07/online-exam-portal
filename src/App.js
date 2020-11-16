import React from 'react';
import './App.css';
import ExamState from './components/context/ExamState';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Exams from './components/Exams';
import Profile from './components/Profile';
import CreateQues from './components/CreateQues';
import ScheduleExam from './components/ScheduleExam';
import Home from './components/Home';
import BoardingPage from './components/BoardingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <ExamState>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={BoardingPage} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/exams" component={Exams} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/createExam" component={ScheduleExam}/>
            <Route exact path="/QuesBank" component={CreateQues}/>
          </Switch>
        </div>
      </Router>
    </ExamState>
  );
}
export default App;
