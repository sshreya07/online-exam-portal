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

const App = () => {
  return (
    <ExamState>
      <Router>
        <div className="App">
          <BoardingPage/>
          <Switch>
            <Route exact path="/boardingPage" component={BoardingPage} />
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
