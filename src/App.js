import './App.css';
import Home from './components/Home';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Drawing from './components/Drawing';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Drawing" exact element={<Drawing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
