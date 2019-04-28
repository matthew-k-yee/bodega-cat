import React, { Component } from 'react';
import { registerConsumer } from '../../services/usersApi';
// const url = endpoint url

class UserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          street_address: "",
          phone_number: ""
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
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            street_address: this.state.street_address,
            phone_number: this.state.phone_number,
        }
        //POST request here
        registerConsumer(data);
        // this.props.populateStorage(token);
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          street_address: "",
          phone_number: ""
        });
        // this.props.logUser();
      }

    render() {
        return(
            <div>
              <h2 className="title">Sign Up</h2>
              <form onSubmit={ this.onFormSubmit }>
                <div className="field">
                  <label htmlFor="first_name">First Name: </label>
                  <input
                    onChange={this.onFormChange}
                    type="text"
                    name="first_name"
                    placeholder="John"
                    value={this.state.first_name}
                  />
                </div>
                <div className="field">
                  <label htmlFor="last_name">Last Name: </label>
                  <input
                    onChange={this.onFormChange}
                    type="text"
                    name="last_name"
                    placeholder="Doe"
                    value={this.state.last_name}
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
