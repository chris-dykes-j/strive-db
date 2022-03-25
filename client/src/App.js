import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Character from './routes/Character';
import styles from "./styles.css";
import ram from "./images/RamIdle.gif";
import may from "./images/MayCute.jpeg";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ramlethal/" element={
            <Character charPath="ramlethal_valentine" charName="Ramlethal Valentine" charIdle={ram} />}
          />
          <Route exact path="/may/" element={
            <Character charPath="may" charName="May" charIdle={may} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

