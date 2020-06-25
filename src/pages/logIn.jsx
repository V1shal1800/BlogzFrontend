import React, { Component } from 'react';
import ViewAll from './AdminPages/viewAll';
import DeleteBlog from './AdminPages/delete';
import EditBlog from './AdminPages/Edit';
import CreateBlog from './AdminPages/create';

class LoggedIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: <div />,
			token: this.props.token
		};
	}

	handleViewAll = (event) => {
		event.preventDefault();
		this.setState({
			page: <ViewAll token={this.state.token} />
		});
	};

	handleEdit = (event) => {
		event.preventDefault();
		this.setState({
			page: <EditBlog token={this.state.token} />
		});
	};

	handleCreate = (event) => {
		event.preventDefault();
		this.setState({
			page: <CreateBlog token={this.props.token} />
		});
	};

	handleDelete = (event) => {
		event.preventDefault();
		this.setState({
			page: <DeleteBlog token={this.state.token} />
		});
	};

	render() {
		console.log(this.props.token);
		return (
			<div className="container text-center">
				<button
					className="btn btn-primary text-center m-5"
					style={{ fontSize: 20 }}
					onClick={this.handleViewAll}
				>
					View All Blogs
				</button>
				<button
					className="btn btn-primary text-center m-5"
					style={{ fontSize: 20 }}
					onClick={this.handleCreate}
				>
					Create Blog
				</button>
				<button
					className="btn btn-primary text-center m-5"
					style={{ fontSize: 20 }}
					onClick={this.handleDelete}
				>
					Delete Blog
				</button>
				<button className="btn btn-primary text-center m-5" style={{ fontSize: 20 }} onClick={this.handleEdit}>
					Edit Blog
				</button>
				{this.state.page}
			</div>
		);
	}
}

export default LoggedIn;
