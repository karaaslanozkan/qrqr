import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import QRscan from './pages/QRscanner'

function App() {
  return (
    <div className="App">
      <div className="App-header">
     <QRscan/>
      </div>
    </div>
  );
}

export default App;
