import React, {Component} from 'react';
import axios from 'axios';

export default class ProductsList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {products: [],
            username:this.props.location.user

        }
    }

    componentDidMount() {
       const newProduct = {
           username: this.state.username,
           status:'waiting' 

           
        }

        axios.post('http://localhost:4000/login/vendor/waitingproducts', newProduct)
              .then(response => {
                 this.setState({products: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
            
  
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
changestatus=(vendorname,productname) =>{

        const  updateorderstatus= {
            username: this.state.username,
            productname: productname,
            vendorname:vendorname,
            quantityleftfororder:0, 
                        status:'cancelled'
            
            
        }
        
        axios.put('http://localhost:4000/login/customer/updateorderstatus', updateorderstatus  )
             .then(res => console.log(res.data));
              axios.put('http://localhost:4000/login/customer/updateorderstatus2', updateorderstatus  )
             .then(res => console.log(res.data));
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
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>productname</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>status</th>
                            <th>quantityleftfororder</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.state.products.map((currentProduct, i) => {
                            return (
                                <tr>
                                    <td>{currentProduct.username}</td>
                                    <td>{currentProduct.productname}</td>
                                    <td>{currentProduct.price}</td>
                                    <td>{currentProduct.quantity}</td>
                                    <td>{currentProduct.status}</td>
                                    <td>{currentProduct.quantityleftfororder}</td>
                                     <td> <button type="button" onClick={() => this.changestatus(currentProduct.username,currentProduct.productname)}>cancel
              </button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>

         
        )
    }
}
