import React, {Component} from 'react';
import axios from 'axios';

export default class CreateOrder extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            
            username: this.props.location.username,
            productname: this.props.location.productname,
            vendorname:this.props.location.vendorname,
            
            quantity:0,
            status:'waiting',
            quantityleftfororder:0
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeProductname = this.onChangeProductname.bind(this);
        this.onChangeVendorname = this.onChangeVendorname.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeQuantityleftfororder = this.onChangeQuantityleftfororder.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
      onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    onChangeProductname(event) {
        this.setState({ productname: event.target.value });
    }
    onChangeVendorname(event) {
        this.setState({ vendorname: event.target.value });
    }
    onChangeQuantity(event) {
        this.setState({ quantity: event.target.value });
    }
onChangeQuantityleftfororder(event) {
        this.setState({ quantityleftfororder: event.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

       

            const findq = {
            vendorname: this.state.vendorname,
            productname: this.state.productname
            
            
            
        }
   

         axios.post('http://localhost:4000/quantity', findq)
             .then(response => {       
                    this.setState({quantityleftfororder: response.data.quantityleftfororder});



const  updateorderstatus= {
            username: this.state.username,
            productname: this.state.productname,
            vendorname:this.state.vendorname,
            quantityleftfororder:this.state.quantityleftfororder- this.state.quantity,
            status:'waiting'
            
            
        }
          const newOrder = {
            username: this.state.username,
            productname: this.state.productname,
            vendorname:this.state.vendorname,
            quantity: this.state.quantity,
            status:'waiting',
            quantityleftfororder:this.state.quantityleftfororder- this.state.quantity

            
            
        }
        if(updateorderstatus.quantityleftfororder<0)
         {
            updateorderstatus.status='ready'
           
         }
          if(updateorderstatus.quantityleftfororder<0)
         {
            newOrder.status='ready'
           
         }
         console.log(updateorderstatus.quantityleftfororder);
         
        console.log(newOrder.status);
        axios.post('http://localhost:4000/login/customer/addorder', newOrder  )
             .then(res => console.log(res.data));
             alert("order added");
        axios.put('http://localhost:4000/login/customer/updateorderstatus', updateorderstatus  )
             .then(res => console.log(res.data));
             axios.put('http://localhost:4000/login/customer/updateorderstatus2', updateorderstatus  )
             .then(res => console.log(res.data));
        this.setState({
            username: this.props.location.username,
            productname: this.props.location.productname,
            vendorname:this.props.location.vendorname,
            
        });
        this.props.history.push({
            pathname:'/login/customer/',
            user:this.state.username
        });
    });
    }
 Orderslist=() =>{
        this.props.history.push({
            pathname:'/login/customer/orders-list',
            user:this.state.username
        });
    }
    render() {
        return (
            <div>
            <button type="button" onClick={this.Orderslist}>My Orders
              </button>
              <br/>
              <br/>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>enter quantity: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.quantity}
                               onChange={this.onChangeQuantity}
                               />  
                    </div>
                   
                    
                            
        
                    <div className="form-group">
                        <input type="submit" value="order " className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
