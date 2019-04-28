import React from 'react';
import axios from 'axios';
import Item from '../ItemList';

class StoreProfile extends Component{

      constructor(props){
          super(props);
            this.state={
              store_id:0,
              store_name: '',
              address: '',
              phone_number: '',
              monday: '',
              tuesday: '',
              wednesday: '',
              thursday: '',
              friday: '',
              saturday: '',
              monday: '',
              sunday: '',
              category: '',
              itemList:[]
          }
          this.getItemList = this.getItemList.bind(this);
          this.setStoreId = this.setStoreId.bind(this);
      }




          async getItemList(){
            try{
            const response = await axios.get(`${this.props.BASE_URL}/stores/:id/inventory`);
              this.setState({
                itemList:response.data.inventory
              })
            }catch(e){
              console.log("get itemList failed due to " + e);
            }
          }

          componentDidMount(){
            this.getItemList();
          }


      render(){
        return(
          <div>
            <h1>{this.state.store_name}</h1>
            <h3>{this.state.address}</h3>
            <h3>{this.state.phone_number}</h3>
            <h4>{this.state.category}</h4>
            <p>monday hours {this.state.monday}</p>
            <p>tuesday hours {this.state.tuesday}</p>
            <p>wednesday hours {this.state.wednesday}</p>
            <p>thursday hours {this.state.thursday}</p>
            <p>friday hours {this.state.friday}</p>
            <p>saturday hours {this.state.saturday}</p>
            <p>sunday hours {this.state.sunday}</p>

              <Item list={this.state.itemList}  />

          </div>
        );

      }

}

export default StoreProfile;
