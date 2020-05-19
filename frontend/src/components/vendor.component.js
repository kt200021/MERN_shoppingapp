import React, {Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css"


//import Createproduct from './create-product.component'
//import Productslist from './products-list.component'


    export default class Vendor extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.location.user
        }

        
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
            </div>

       
         
      
      
    )
}

   
}