import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import SignUpContainer from './components/SignUpContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: '',
      isLogged: false,
      user_email: null
    }
    this.populateStorage = this.populateStorage.bind(this);
    this.logUser = this.logUser.bind(this);
    this.render = this.render.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  changeView = async view => {
    await this.setState({
      view: view
    });
  }

  populateStorage = token => {
    localStorage.setItem('token', token);
  }

  logUser = () => {
    const token = localStorage.getItem('token');
    const userData = jwtDecode(token);
    this.setState({
      isLogged: true,
      email: userData.email,
      view: 'landing'
    });
  }

  render = () => {
    switch (this.state.view) {
      case 'landing':
        return (<LandingPage changeView={this.changeView}/>)
        break;
      case 'signup':
        return (<SignUpContainer populateStorage={this.populateStorage} logUser={this.logUser} changeView={this.changeView}/>)
        break;
      default:
        return (<LandingPage changeView={this.changeView}/>)
    }
  }

  render() {
    return (
      <div className="App">
      Bodega Cats
      {this.render()}
      </div>
    );
  }
}

export default App;
