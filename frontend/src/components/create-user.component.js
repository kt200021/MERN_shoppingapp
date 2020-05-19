import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            usertype:'customer',
            password:''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangeUsertype = this.onChangeUsertype.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    onChangeUsertype(event) {
        this.setState({ usertype: event.target.value });
    }
onChangepassword(event) {
        this.setState({ password: event.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            usertype: this.state.usertype,
            password: this.state.password
        }

        axios.post('http://localhost:4000/useradd', newUser)
             .then(res => console.log(res.data));
             alert("user added");

        this.setState({
            username: '',
            email: '',
            usertype:'customer',
            password:''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.username}
                               onChange={this.onChangeUsername}
                               />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               />  
                    </div>
                     <div className="form-group">
                        <label>password : </label>
                        <input type="password" 
                               className="form-control" 
                               value={this.state.password}
                               onChange={this.onChangepassword}
                               />  
                    </div>

                    <div className="form-group">
                        <label>usertype: 
                            <select type="text" className="form-control" value={this.state.usertype} onChange={this.onChangeUsertype}>
                            <option value="customer">customer</option>
                            <option value="vendor">vendor</option>
                    </select>
                    </label>
                    </div>
                            
        
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
