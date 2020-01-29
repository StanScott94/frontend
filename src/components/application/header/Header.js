import React from 'react';
import AuthService from '../../authentication/AuthService';
const Auth = new AuthService();

class Header extends React.Component {
        
	render() {
        
        if (Auth.loggedIn()) {
        	var username = Auth.getProfile().sub
    		return(
				<div className="App-header">
					<h1 className="App-header-welcome">Welcome {username}</h1>
					<p className="App-header-logout">
						<button type="button"
								className="form-submit" 
								onClick={this.handleLogout.bind(this)}>Logout</button> 
					</p>
				</div>
			);
        } else {
    		return(
    				<div className="App-header">
    				<h1 className="App-header-welcome">Welcome {username}</h1>
    				</div>
    			);
        }

	}
	
	handleLogout(){
	    Auth.logout()
	    window.location.replace('/login');
	}
}

export default Header;
