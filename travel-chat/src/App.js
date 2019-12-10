import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import Register from './components/Register'
import Login from './components/Login'

import * as ROUTES from './constants/routes'
import { firebase, auth } from './firebase';

import './App.css';

class AppRouter extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({
          currentUser: {
            displayName: authUser.displayName
          }
        })
        : this.setState({ currentUser: null })
    });
  }

  doLogOutUser = () => {
    firebase.auth().signOut()
      .then(window.location = '/')
  }

  render() {
    const { currentUser } = this.state;
    console.log(currentUser)
    return (
      <Router>
        <NavBar currentUser={currentUser} doLogOutUser={this.doLogOutUser} />
        <main>
          <Switch>
            <Route exact path={ROUTES.HOME} render={() => <div>home</div>} />
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <Route exact path={ROUTES.REGISTER} component={Register} />
            <Route exact path={ROUTES.CITIES} render={() => <div>cities</div>} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default AppRouter;
