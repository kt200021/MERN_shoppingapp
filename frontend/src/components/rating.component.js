import React, {Component} from 'react';
import axios from 'axios';

export default class rating extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            
            username: this.props.location.username,
            productname: this.props.location.productname,
            rating:0,
            vendorrating:0,
            nv:0
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeProductname = this.onChangeProductname.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangevendorrating = this.onChangevendorrating.bind(this);
        this.onChangenv = this.onChangenv.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
      onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    onChangeProductname(event) {
        this.setState({ productname: event.target.value });
    }
    onChangeRating(event) {
        this.setState({ rating: event.target.value });
    }
    onChangevendorrating(event) {
        this.setState({ vendorrating: event.target.value });
    }
onChangenv(event) {
        this.setState({ nv: event.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

       

            const findq = {
            vendorname: this.state.username,
            productname: this.state.productname
            
            
            
        }
   

         axios.post('http://localhost:4000/quantity1', findq)
             .then(response => {       
                console.log(response.data);
                    this.setState({vendorrating: response.data.vendorrating});
this.setState({nv: response.data.nv});
                   


const  updateorderstatus= {
            username: this.state.username,
            productname: this.state.productname,
            
            vendorrating:Number(this.state.vendorrating)+Number(this.state.rating),
            nv:this.state.nv+1
            
            
        }
        console.log("vendorrating::");
        console.log(updateorderstatus.vendorrating);
        console.log(updateorderstatus.nv2);
        axios.put('http://localhost:4000/login/customer/updaterating', updateorderstatus  )
             .then(res => console.log(res.data));
           alert("rating submitted");
        this.setState({
            username: this.props.location.username,
            productname: this.props.location.productname
            
            
        });
    });
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
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <label>select
                            <select type="text" className="form-control" value={this.state.rating} onChange={this.onChangeRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            
                    </select>
                    </label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
