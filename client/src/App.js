import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import SignUpContainer from './components/SignUpContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: ''
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView = async view => {
    await this.setState({
      view: view
    })
  }

  render = () => {
    switch (this.state.view) {
      case 'landing':
        return (<LandingPage changeView={this.changeView}/>)
        break;
      case 'signup':
        return (<SignUpContainer changeView={this.changeView}/>)
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
