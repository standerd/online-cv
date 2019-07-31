import React from 'react';
import './App.css';
import Details from "./containers/details/details"
import About from "./containers/about/about"

function App() {
  return (
    <div className="App">
      <div className="about">
      <About/>
      </div>

      <div className="details">
      <Details/>
      </div>
      
    </div>
  );
}

export default App;
