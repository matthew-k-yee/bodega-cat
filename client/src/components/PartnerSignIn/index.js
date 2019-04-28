import React, { Component } from 'react';
import { loginPartner } from '../../services/usersApi';

// const url = endpoint url

class PartnerSignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
          email: "",
          password: "",
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
            email: this.state.email,
            password: this.state.password,
        }
        //POST request here
        loginPartner(data);

        this.setState({
          email: "",
          password: "",
        })
    }

    render() {
        return(
            <div>
              <h2 className="title">User Sign In</h2>
              <form onSubmit={ this.onFormSubmit }>
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
                <div className="control">
                  <button type="submit" className="button">Login</button>
                </div>
            </form>
            </div>
        )
    }
}

export default PartnerSignIn;
