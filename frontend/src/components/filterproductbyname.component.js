import React, {Component} from 'react';
import axios from 'axios';

export default class ProductsListbyname extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            username:this.props.location.username,
            productname:this.props.location.productname
            
        }

    }

    componentDidMount() {
        const newProduct = {
           productname: this.state.productname
            

           
        }

        console.log(this.state.username);
        console.log(this.state.productname);
        axios.post('http://localhost:4000/login/customer/ProductsListbyname', newProduct)
              .then(response => {
                 this.setState({products: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
    }
    onSubmit = (vendorname) => {

      
            this.props.history.push({
            pathname:'/login/customer/createorder',
            username:this.state.username,
            productname:this.state.productname,
            vendorname:vendorname


        }

            );
      

    }
    
sortByPrice=()=>{

          let sortedProductsAsc;
          sortedProductsAsc= this.state.products.sort((a,b)=>{
             return parseInt(a.price)  - parseInt(b.price);
          })

          this.setState({
              products:sortedProductsAsc
          })
      }
      sortByquantityleftfororder=()=>{

          let sortedProductsAsc;
          sortedProductsAsc= this.state.products.sort((a,b)=>{
             return parseInt(a.quantityleftfororder)  - parseInt(b.quantityleftfororder);
          })

          this.setState({
              products:sortedProductsAsc
          })
      }
      sortByPricevendorrating=()=>{

          let sortedProductsAsc;
          sortedProductsAsc= this.state.products.sort((a,b)=>{
             return parseInt(b.vendorrating/b.nv)  - parseInt(a.vendorrating/a.nv);
          })

          this.setState({
              products:sortedProductsAsc
          })
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
            <button type="button" onClick={this.sortByPrice}>sortbyprice
              </button>
              <button type="button" onClick={this.sortByquantityleftfororder}>sortByquantityleftfororder
              </button>
              <button type="button" onClick={this.sortByPricevendorrating}>sortByPricevendorrating
              </button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>productname</th>
                            <th>price</th>
                            <th>quantity</th>
                            <th>status</th>
                            <th>quantityleftfororder</th>
                            <th>vendorrating</th>
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
                                    <td>{currentProduct.vendorrating/currentProduct.nv}</td>
                                       <td>   <button type="button" onClick={() => this.onSubmit(currentProduct.username)}>order product
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
