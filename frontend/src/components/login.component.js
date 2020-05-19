import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    onChangepassword(event) {
        this.setState({ password: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:4000/logg', newUser)
             .then(res => {
                if(!res.data)
                {
                    alert("invalid details");
                }
                else
                {
                if(res.data.usertype === "vendor")
                this.props.history.push({
                    pathname:'/login/vendor',
                    user:newUser.username

                    });
                else if(res.data.usertype === "customer")
                this.props.history.push({
                    pathname:'/login/customer',
                    user:newUser.username

                    });
                }


        });



        this.setState({
            username: '',
            email: ''
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
                        <label>password: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.password}
                               onChange={this.onChangepassword}
                               />  
                    </div>
                    <div className="form-group">
                        <input type="submit" value="login" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}