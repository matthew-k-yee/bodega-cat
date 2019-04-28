import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: ''
    }
    this.render = this.render.bind(this);
  }

  changeView = view => {
    this.setState({
      view: view
    })
  }

  render = () => {
    switch (this.state.view) {
      case 'landing':
        return (<LandingPage render={(view) => this.changeView}/>)
        break;
      default:
        return (<LandingPage render={(view) => this.changeView}/>)
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
