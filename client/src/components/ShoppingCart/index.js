import React from 'react';

class Shoppingcart extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      items: [
        {
          name: "toilet paper",
          price: "$1,500"
        },
        {
          name: "toilet paper",
          price: "$1,500"
        },
        {
          name: "idk",
          price: "my balls"
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <h1>shopping cart component</h1>
        {
          this.state.map(
            item => {
              return (
                <div>
                  <h1>{item.name}</h1>
                  <h2>{item.price}</h2>
                </div>
              )
            }
          )
        }
      </div>
    )
  }
};

export default Shoppingcart;