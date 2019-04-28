import React, { Component } from 'react'
import axios from 'axios';
import {Map, InfoWindow, Marker, DistanceMatrixService, GoogleApiWrapper} from 'google-maps-react';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

class AddressForm extends Component{

  constructor(props){
    super(props);
      this.state={
        street_address:'',
        searchedAddress:''
    }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
  const{ name, value } = e.target;

  this.setState({
    [name]: value
  })

  }


  checkdirection=async(name) =>{

  try {
    const data = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=${googleClientId}`);
<<<<<<< HEAD
=======
    // const address = data.data.results[0].formatted_address;
>>>>>>> a7b91114dc0b585197ba1f040bc8cf85e60814dc
    const address=data.data.results[0].formatted_address;


    console.log(address)

    this.setState({searchedAddress: address})

  } catch (e) {
    console.log(e)
  }
}


  async handleSubmit(e) {
      e.preventDefault();
      this.checkdirection(this.state.street_address);

    }

render() {
    return(
      <div className="AddressForm">

        <form onSubmit={ this.handleSubmit }>

                        <div className="field">
                          <label htmlFor="street_address">Street Address </label>
                          <input
                            onChange={this.handleChange}
                            type="text"
                            name="street_address"
                            placeholder="123 any street"
                            value={this.state.street_address}
                          />
                        </div>



        			</form>

              {this.state.searchedAddress}
      </div>
    );

  }

}

export default GoogleApiWrapper({
  apiKey: (googleClientId)
})(AddressForm)
