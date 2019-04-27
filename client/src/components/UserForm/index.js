import React, { Component } from 'react';

// const url = endpoint url

class UserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            street_address: "",
            zipcode: "",
            city: "",
            state: "",
            phone_number: "",
            credit_card: ""
        }
    }

    onFormChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = event => {
        event.preventDefault();
        let data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            zipcode: this.state.zipcode,
            city: this.state.city,
            state: this.state.state,
            phone_number: this.state.phone_number,
            credit_card: this.state.credit_card
        }
        //POST request here
        console.log(data);
    }

    render() {
        return(
            <div>
              <h2 className="title">Sign Up</h2>
              <form onSubmit={ this.onFormSubmit }>
                <div className="field">
                  <label htmlFor="name">Full Name: </label>
                  <input
                    onChange={this.onFormChange}
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={this.state.name}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email: </label>
                  <input
                    onChange={this.onFormChange}
                    type="text"
                    name="email"
                    placeholder="Email@Domain.com"
                    value={this.state.email}
                  />
                </div>
                <div className="field">
                  <label htmlFor="password">Password: </label>
                  <input
                    onChange={this.onFormChange}
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                  />
                </div>
                <div className="field">
                  <label htmlFor="street_address">Street Address: </label>
                  <input
                    onChange={this.onFormChange}
                    type="text"
                    name="street_address"
                    placeholder="123 Somewhere St."
                    value={this.state.street_address}
                  />
                </div>
                <div className="field">
                  <label htmlFor="city">City: </label>
                  <input
                    onChange={this.onFormChange}
                    type="text"
                    name="city"
                    placeholder="New York"
                    value={this.state.city}
                  />
                </div>
                <div className="field">
                  <label htmlFor="state">State: </label>
                  <input
                    onChange={this.onFormChange}
                    type="text"
                    name="state"
                    placeholder="NY"
                    value={this.state.state}
                  />
                </div>
                <div className="field">
                  <label htmlFor="zipcode">Zipcode: </label>
                  <input
                    onChange={this.onFormChange}
                    type="text"
                    name="zipcode"
                    placeholder="12345"
                    value={this.state.zipcode}
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone_number">Phone: </label>
                  <input
                    onChange={this.onFormChange}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    type="text"
                    name="phone_number"
                    placeholder="123-456-7890"
                    value={this.state.phone_number}
                  />
                  <span className="note">Format: 123-456-7890</span>
                </div>
                {/* Add option for credit card */}
                <div className="control">
                  <button type="submit" className="button">Create User</button>
                </div>
            </form>
            </div>
        )
    }
}

export default UserForm;
