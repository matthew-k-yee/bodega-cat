import React, { Component } from 'react';

// const url = endpoint url

class StoreForm extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: "",
          email: "",
          password: "",
          address: "",
          phone_number: "",
          hours_of_operation: "",
          category: "",
          inventory: []
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
            address: this.state.address,
            phone_number: this.state.phone_number,
            hours_of_operation: this.state.hours_of_operation,
            category: this.state.category,
            inventory: this.state.inventory
        }
        //POST request here
        console.log(data);

        this.setState({
          name: "",
          email: "",
          password: "",
          address: "",
          phone_number: "",
          hours_of_operation: "",
          category: "",
          inventory: []
        });
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
                  <label htmlFor="address">Address: </label>
                  <input
                    onChange={this.onFormChange}
                    type="text"
                    name="address"
                    placeholder="123 Somewhere St."
                    value={this.state.address}
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
                <div className="field">
                  <label htmlFor="category">Category: </label>
                  <input
                    onChange={this.onFormChange}
                    type="text"
                    name="category"
                    placeholder="New York"
                    value={this.state.category}
                  />
                </div>

                {/* Uncomment when InventoryForm is created*/}
                {/* <Inventory /> */}


                {/* Uncomment when we implement the hours of operation */}
                {/* <div className="field">
                  <label htmlFor="hours_of_operation">Hours of Operation: </label>
                  <input
                    onChange={this.onFormChange}
                    type="text"
                    name="hours_of_operation"
                    placeholder="12345"
                    value={this.state.hours_of_operation}
                  />
                </div> */}
                <div className="control">
                  <button type="submit" className="button">Create Business</button>
                </div>
            </form>
            </div>
        )
    }
}

export default StoreForm;
