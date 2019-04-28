import React from 'react';
import { Menu, Icon, Button, Input} from 'antd';
import "./index.css";



export default function Nav(props) {

  return (

      <div>
          <a className = "logo" ><img src={ require('../media/logo.png')}  style={{ height: "80px" }} alt={'home'}
          /></a>
          <h1>Bodega Cats</h1>
        <Button>Download our app</Button>
        <Button>Sign In</Button>

        Support local businesses, get what you need fast
        <Input
      placeholder="enter address"
      onSearch={value => console.log(value)}
      enterButton
    />
        </div>
        
        
        
    
  )
}