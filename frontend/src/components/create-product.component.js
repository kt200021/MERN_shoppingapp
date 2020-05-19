import React, {Component} from 'react';
import axios from 'axios';

export default class CreateProduct extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.location.user,
            productname: '',
            price:0,
            quantity:0,
            status:'waiting',
            quantityleftfororder:0
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeProductname = this.onChangeProductname.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeQuantityleftfororder = this.onChangeQuantityleftfororder.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    onChangeProductname(event) {
        this.setState({ productname: event.target.value });
    }
    onChangePrice(event) {
        this.setState({ price: event.target.value });
    }
    onChangeQuantity(event) {
        this.setState({ quantity: event.target.value });
    }
    onChangeStatus(event) {
        this.setState({ status: event.target.value });
    }
 onChangeQuantityleftfororder(event) {
        this.setState({ quantityleftfororder: event.target.value });
    }
    Createproduct=() =>{
        this.props.history.push({
            pathname:'/login/vendor/create',
            user:this.state.username
        }

            );

    }
    Productslist=() =>{
        this.props.history.push({
            pathname:'/login/vendor/products',
            user:this.state.username
        });
    }
    Productslistr=() =>{
        this.props.history.push({
            pathname:'/login/vendor/readyproducts',
            user:this.state.username
        });
    }
    Productslistd=() =>{
        this.props.history.push({
            pathname:'/login/vendor/dispatchproducts',
            user:this.state.username
        });
    }
 Productslistc=() =>{
        this.props.history.push({
            pathname:'/login/vendor/cancelproducts',
            user:this.state.username
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const newProduct = {
            username: this.state.username,
            productname: this.state.productname,
            price: this.state.price,
            quantity: this.state.quantity,
            status:this.state.status,
            quantityleftfororder:this.state.quantity,
             productrating:0,
             vendorrating:0,
             nv:0,
             np:0,
             review:"nil"
            
        }

        axios.post('http://localhost:4000/productadd', newProduct   )
             .then(res => console.log(res.data));
alert("product added");
        
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
         
                    <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              
               <li className="navbar-item">
              <button type="button" onClick={this.Productslist}> waiting products
              </button>
                 </li>


              <li className="navbar-item">
              <button type="button" onClick={this.Createproduct}>Create product
              </button>
              </li>


              <li className="navbar-item">
              <button type="button" onClick={this.Productslistr}>ready to dispacth products
              </button>
            </li>

              
              <li className="navbar-item">
              <button type="button" onClick={this.Productslistd}>dispacthed products
              </button>

              </li>
              <li className="navbar-item">
              <button type="button" onClick={this.Productslistc}>cancelled products
              </button>

              </li>
              
            </ul>
            </div>
            <div>
                <p>vendor name:</p>

                {this.state.username}
            </div>

            </nav>
            
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>productname: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.productname}
                               onChange={this.onChangeProductname}
                               />  
                    </div>
                    <div className="form-group">
                        <label>price: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.price}
                               onChange={this.onChangePrice}
                               />
                    </div>
                    <div className="form-group">
                        <label>quantity: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.quantity}
                               onChange={this.onChangeQuantity}
                               />  
                    </div>
                    
                            
        
                    <div className="form-group">
                        <input type="submit" value="Create product" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
