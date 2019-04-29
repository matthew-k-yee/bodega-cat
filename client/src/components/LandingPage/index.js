import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input } from 'reactstrap';
import "./index.css";

export default function LandingPage(props) {
console.log(props.view)
  return (
    <div>
      <nav id="nav">
        <a className = "logo" >
          <img src={ require('../media/logo.png')}  style={{ height: "80px" }} alt={'home'}/>
        </a>
        <h1>Bodega Cat</h1>
        <div id="nav-buttons">
          <p onClick={() => props.changeView('signup')}>Sign Up</p>
          <p>Sign In</p>
        </div>
      </nav>
      <div id="container">
        <div id="input">
          <Input
          id="address-input"
          placeholder="Enter Address"
          />
          <p>Support local businesses, get what you need fast</p>
        </div>
      </div>
    </div>




  )
}
