import React, { Component } from 'react';
import reactRouterDom, { Link } from 'react-router-dom';



class Login extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="User Name" />
                <input type="password" placeholder="Password" />
              <Link to="/MainList">
                <button>Login</button>
                <button>Forgot Password?</button>
              </Link>

            </div>
        );
    }
}

export default Login;