import React, { Component } from 'react'
import './style/App.css';
import withAuth from './components/authentication/WithAuth';

class App extends Component {
	
	render() {	
		return(
				<h1>hello</h1>
		);
	}
}

export default withAuth(App);
