import React, { Component } from 'react'
import axios from 'axios';
import {Map, InfoWindow, Marker, DistanceMatrixService, GoogleApiWrapper} from 'google-maps-react';
import StoreListDetails from '../StoreListDetails';

const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

class StoreList extends Component{

  constructor(props){
    super(props);
      this.state={
        searchedAddress: props.searchedAddress,
        addressList: []
    }

  }


  async componentDidMount(){
     await this.checkdirection();
     console.log('direction called')
  }

  checkdirection=async() =>{

  try {

    const data= await axios.get(`/stores`);
    const stores = data.data.stores;
    console.log('store data in list', stores)

    this.setState({
      addressList: stores
    })
    // const data = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${name}&key=${googleClientId}`);
    // const address=data.data.results[0].formatted_address;
    //
    //
    // console.log(address)
    //
    // this.setState({searchedAddress: address})

  } catch (e) {
    console.log(e)
  }
}


  async handleSubmit(e) {
      e.preventDefault();
      // this.checkdirection(this.state.street_address);

    }

render() {
    return(
      <div className="StoreList">
        store list
<StoreListDetails info={this.state.addressList}/>
        {this.state.searchedAddress}
      </div>
    );

  }

}

export default GoogleApiWrapper({
  apiKey: (googleClientId)
})(StoreList)
