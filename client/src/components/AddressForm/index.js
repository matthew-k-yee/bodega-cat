import React, { Component } from 'react'
import axios from 'axios';
class AddressForm extends Component{

  constructor(props){
    super(props);
      this.state={
    street_address:'',
    zipcode:'',
    city:'',
    state:''
    }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
  const{ name, value } = e.target;
  this.setState(prevState => ({
    ...prevState,
    auth: {
      ...prevState.auth,
      [name]: value
    }
  }));
  }


  async handleSubmit(e) {
      e.preventDefault();
      try{

          console.log(e);
        }

      }catch(e){
        console.log(e);

      }
    }

render() {
    return(
      <div className="AddressForm">

        <form onSubmit={ this.onFormSubmit }>
                        <div className="field">
                          <label htmlFor="street_address">Street Address </label>
                          <input
                            onChange={this.onFormChange}
                            type="text"
                            name="street_address"
                            placeholder="123 any street"
                            value={this.state.street_address}
                          />
                        </div>


                        <div className="field">
                          <label htmlFor="zipcode">Zipcode</label>
                          <input
                            onChange={this.onFormChange}
                            type="text"
                            name="zipcode"
                            placeholder="0000"
                            value={this.state.zipcode}
                            maxLength="4"
                          />
                        </div>


                        <div className="field">
                          <label htmlFor="city">City</label>
                          <input
                            onChange={this.onFormChange}
                            type="text"
                            name="city"
                            placeholder="nowhereville"
                            value={this.state.city}
                          />
                        </div>


                        <div className="field">
                          <label htmlFor="state">State </label>
                          <input
                            onChange={this.onFormChange}
                            type="text"
                            name="state"
                            placeholder=""
                            value={this.state.state}
                          />
                        </div>

        			</form>

      </div>
    );

  }

}
export default AddressForm;
