import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from './pages/Home'
import QRscan from './pages/QRscanner'

function App() {
  return (
    <div className="App">
      <div className="App-header">
      
        <Router>
          <div>

            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/qr_scanner">
                <QRscan/>
              </Route>
            </Switch>

          </div>
        </Router>

      </div>
    </div>
  );
}

export default App;
