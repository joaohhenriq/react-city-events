import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './view/login'
import Register from './view/register'
import Home from './view/home'
import ForgotPassword from './view/forgotPassword'
import CreateEvent from './view/createEvent'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/createevent' component={CreateEvent} />
      </Router>
    </Provider>
  );
}

export default App;
