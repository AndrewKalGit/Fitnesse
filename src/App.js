import './App.css';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from './Login';
import Tracker from './Tracker';
import About from './About';

function App() {
  return (
    <div className="App">
           <Router>
              <nav>
                  <Link to="/login"> Home </Link>
                  <Link to="/tracker"> Tracker </Link>
                  <Link to="/about"> About </Link>
              </nav>
                <Routes>
                  <Route path="/login" element={<Login />} ></Route>
                  <Route path="/tracker" element={<Tracker />} ></Route>
                  <Route path="/about" element={<About />} ></Route>
                </Routes>
          </Router>
    </div>
  );
}

export default App;
