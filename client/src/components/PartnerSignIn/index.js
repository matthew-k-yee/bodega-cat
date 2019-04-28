import React, { Component } from 'react';

// const url = endpoint url

class PartnerSignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
          email: "",
          password_digest: "",
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
            password_digest: this.state.password_digest,
        }
        //POST request here
        console.log(data);

        this.setState({
          email: "",
          password_digest: "",
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
                  <label htmlFor="password_digest">Password: </label>
                  <input
                    onChange={this.onFormChange}
                    type="password"
                    name="password_digest"
                    placeholder="password"
                    value={this.state.password_digest}
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
