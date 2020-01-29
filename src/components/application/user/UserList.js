import React, {Component} from 'react';
import AuthService from '../../authentication/AuthService';

class UserList extends Component {
	
	constructor(){
		super()
		this.state = {users : []}
		this.getUsers = this.getUsers.bind(this);
		this.Auth = new AuthService();
	}

	componentDidMount(){
		this.getUsers();
	}

	render(){
		const users = this.state.users;
		return (
			<ul>
				{users.map(user => (
					<li key={user.id}>
						<div>{user.username}</div>
						<div>{user.firstName}</div>
						<div>{user.lasttName}</div>
					</li>
				))}
			</ul>
		);
	}
	
    getUsers() {
		this.Auth.fetch('/users', { method: 'GET' })
		.then(data => {this.setState({users : data._embedded.userList}) })
    }
}

export default UserList;