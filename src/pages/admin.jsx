import React, { Component } from 'react';
import Axios from 'axios';
import LoggedIn from './logIn';

class AdminPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			token: '',
			flag: false
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const data = this.state;
		Axios.post('https://newblogz1800.herokuapp.com/admin', { email: data.email, password: data.password })
			.then((res) => {
				alert(res.data.message);
				this.setState({
					token: res.data.token,
					flag: true
				});
				console.log(this.state);
			})
			.catch((res, err) => {
				console.log(err);
				alert(res.message);
			});
	};

	handleInputChange = (event) => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		if (!this.state.flag) {
			return (
				<div className="container">
					<form>
						<div className="form-group">
							<label>Email address</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								name="email"
								placeholder="Enter email"
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								name="password"
								placeholder="Password"
								onChange={this.handleInputChange}
							/>
						</div>
						<button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
							Login
						</button>
					</form>
				</div>
			);
		} else {
			return <LoggedIn token={this.state.token} />;
		}
	}
}

export default AdminPage;
