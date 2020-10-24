import React from 'react';
import './App.css';
import LeftNav from './components/LeftNav';
import Navbar from "./components/Navbar";
import WorkArea from "./components/WorkArea";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LeftNav/><WorkArea/>
    </div>
  );
}
export default App;
