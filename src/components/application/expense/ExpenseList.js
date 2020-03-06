import React, {Component} from 'react';
import AuthService from '../../authentication/AuthService';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import Create from '@material-ui/icons/Create';

class ExpenseList extends Component {
	
	constructor(){
		super()
		this.state = {expenses : []}
		this.getExpenses = this.getExpenses.bind(this);
		this.Auth = new AuthService();
	}

	componentDidMount(){
		this.getExpenses();
	}

	render(){
		const expenses = this.state.expenses;
		return (
			<ul>
				{expenses.map(expense => (
					<ListItem key={expense.id}>
						<ListItemAvatar>
							<Avatar>
								<MonetizationOn />
							</Avatar>
						</ListItemAvatar>
						<Grid container>
						<ListItemText primary={expense.title} secondary={expense.description} />
						</Grid>
						<Grid container>
						<ListItemText primary={expense.ammount} />
						</Grid>
						<ListItemSecondaryAction>
						<IconButton edge="end" aria-label="delete" onClick={() => { this.deleteExpense(expense); }}>
							<Create />
						</IconButton>
					</ListItemSecondaryAction>
					</ListItem>
				))}
			</ul>
			
		);
	}
	
	getExpenses() {
		this.Auth.fetch('/expenses', { method: 'GET' })
		.then(data => {this.setState({expenses : data._embedded.expenseList}) })
    }
	
	deleteExpense(expense) {
		var url = expense['_links']['self']['href']
		this.Auth.restFetch(url, {    
			method: "DELETE",
		    mode: "cors",
		    cache: "no-cache"
		    	})
	}
}

export default ExpenseList;