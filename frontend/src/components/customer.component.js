import React, {Component} from 'react';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css"


//import Createproduct from './create-product.component'
//import Productslist from './products-list.component'


    export default class Customer extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.location.user,
            productname:''
        }

        
    
      this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeProductname = this.onChangeProductname.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }
    onChangeProductname(event) {
        this.setState({ productname: event.target.value });
    }
    
     Orderslist=() =>{
        this.props.history.push({
            pathname:'/login/customer/orders-list',
            user:this.state.username
        });
    }
 onSubmit(e) {
        e.preventDefault();

        const newProduct = {
            username: this.state.username,
            productname: this.state.productname
            
            
        }
        console.log(newProduct.productname);
        console.log(newProduct.username);
        axios.post('http://localhost:4000/login/customer/ProductsListbyname', newProduct)
             .then(res => {

                this.props.history.push({
                        pathname:'/login/customer/ProductsListbyname',
                        username:newProduct.username,
                        productname: newProduct.productname

                    });
             });

       
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>search for productname: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.productname}
                               onChange={this.onChangeProductname}
                               />  
                    </div>
                    
        
                    <div className="form-group">
                        <input type="submit" value="submit" className="btn btn-primary"/>
                    </div>
                </form>

            
            <button type="button" onClick={this.Orderslist}>My Orders
              </button>
            </div>
      
    )
}

   
}