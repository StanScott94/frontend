import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Header from './components/application/header/Header'
import Login from './components/authentication/Login'
import UserList from './components/application/user/UserList'
import ExpenseList from './components/application/expense/ExpenseList'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
	    <Router>
	        <div>
	        	<Header/>	
	            <Route exact path="/" component={App} />
	            <Route exact path="/login" component={Login} />
	            <Route exact path="/users" component={UserList} />
	            <Route exact path="/expenses" component={ExpenseList} />
	        </div>
	    </Router>
	    , document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
