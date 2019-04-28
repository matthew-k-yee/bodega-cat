import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input } from 'reactstrap';
import "./index.css";

export default function LandingPage(props) {

  return (
    <div>
      <a className = "logo" >
        <img src={ require('../media/logo.png')}  style={{ height: "80px" }} alt={'home'}/>
      </a>
      <h1>Bodega Cats</h1>
      <Button>Download our app</Button>
      <Button>Sign In</Button>
      <p>Support local businesses, get what you need fast</p>
      <Input
        placeholder="enter address"
        onSearch={value => console.log(value)}
        enterButton
      />
    </div>




  )
}
