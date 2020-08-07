import React from 'react';
import { Router, Switch, Route } from 'react-router';
import history from './history';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
