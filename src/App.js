import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './pages/Home'
import QRgen from './pages/QRgenerator'
import QRscan from './pages/QRscanner'

function App() {
  return (
    <div className="App">
      <div className="App-header">
      
        <Router>
          <div>

     <QRscan/>
          </div>
        </Router>

      </div>
    </div>
  );
}

export default App;
