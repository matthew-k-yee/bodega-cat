import React, { Component } from 'react';

// const url = endpoint url

class StoreForm extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: "",
          address: "",
          phone_number: "",
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: "",
          friday: "",
          saturday: "",
          sunday: "",
          category: "",
          partner_id: ""
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
          address: this.state.address,
          phone_number: this.state.phone_number,
          monday: this.state.monday,
          tuesday: this.state.tuesday,
          wednesday: this.state.wednesday,
          thursday: this.state.thursday,
          friday: this.state.friday,
          saturday: this.state.saturday,
          sunday: this.state.sunday,
          category: this.state.category,
          partner_id: this.state.partner_id
        }
        //POST request here
        console.log(data);

        this.setState({
          name: "",
          address: "",
          phone_number: "",
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: "",
          friday: "",
          saturday: "",
          sunday: "",
          category: "",
          partner_id: ""
        });
    }

    render() {
        return(
            <div>
              <h2 className="title">Sign Up</h2>
              <form onSubmit={ this.onFormSubmit }>
                <div className="field">
                  <label htmlFor="name">Name: </label>
                  <input
                    onChange={this.onFormChange}
                    type="text"
                    name="name"
                    placeholder="Mega Store"
                    value={this.state.name}
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
                {/* Insert hours of operation input here */}
                <div className="control">
                  <button type="submit" className="button">Create Business</button>
                </div>
            </form>
            </div>
        )
    }
}

export default StoreForm;
