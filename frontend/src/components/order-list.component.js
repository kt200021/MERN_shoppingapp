import React, {Component} from 'react';
import axios from 'axios';

export default class OrdersList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {orders: [],
            username:this.props.location.user,
            

        }
    }

    componentDidMount() {
       const newOrder = {
           username: this.state.username
            

           
        }

        axios.post('http://localhost:4000/login/customer/OrdersListbyname', newOrder)
              .then(response => {
                 this.setState({orders: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
        
      

  
}
rate=(vendorname,productname,status) =>{
    if(status!='waiting')
    {
        this.props.history.push({
            pathname:'/login/customer/rating',
            username:vendorname,
            productname:productname
        }

            );
}
    }
home=() =>{
        this.props.history.push({
            pathname:'/login/customer/',
            user:this.state.username
        });
    }
    render() {
        return (
            <div>
            <button type="button" onClick={this.home}>home              </button>
              <br/>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>productname</th>
                            
                            <th>quantity</th>
                            <th>vendorname</th>
                            <th>status</th>
                            <th>quantityleftfororder</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.state.orders.map((currentOrder, i) => {
                            return (
                                <tr>
                                    <td>{currentOrder.username}</td>
                                    <td>{currentOrder.productname}</td>
                                    
                                    <td>{currentOrder.quantity}</td>
                                    <td>{currentOrder.vendorname}</td>
                                    <td>{currentOrder.status}</td>

                                    <td>{currentOrder.quantityleftfororder}</td>
                                  <td>  <button type="button" onClick={() => this.rate(currentOrder.vendorname,currentOrder.productname,currentOrder.status)}>rate/review
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
