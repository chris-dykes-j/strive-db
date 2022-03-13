import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Character from './routes/Character';
// import MoveList from "./components/MoveList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/character/" component={Character} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*
  const [attacks, setAttacks] = useState([
    "Dauro",
    "Erarlumo",
    "Sildo Detruo",
    "Bajoneto",
    "Agresa Ordono",
    "Sabrobato",
    "Calvados",
    "Mortobato",
  ]);
*/
