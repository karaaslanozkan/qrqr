import './App.css';
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,

  // Link
} from "react-router-dom";
import Params from './pages/Params';
import QRscan from './pages/QRscanner'

function App() {
  const [mounturl, setMounturl] = useState("");
  return (
    <div className="App">
      <div className="App-header">
      <QRscan mounturl={mounturl} />
        <Router>
          <div>
            <Switch>
              <Route path="/:id"  children={<Params setUrl={setMounturl}/>}>
              </Route>
            </Switch>
          </div>
        </Router>

      </div>
    </div>
  );
}
export default App;
