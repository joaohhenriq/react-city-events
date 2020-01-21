import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './view/login'
import Register from './view/register'

function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/register' component={Register} />
    </Router>
  );
}

export default App;
