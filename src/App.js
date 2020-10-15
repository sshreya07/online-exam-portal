import React from 'react';
import './App.css';
import LeftNav from './components/LeftNav';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LeftNav/>
    </div>
  );
}
export default App;
