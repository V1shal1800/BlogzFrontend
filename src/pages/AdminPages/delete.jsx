import React, { Component } from 'react';
import Axios from 'axios';

class DeleteBlog extends Component {
	state = {
		id: ''
	};

	handleSubmit = (event) => {
		event.preventDefault();
		Axios.delete(`https://newblogz1800.herokuapp.com/blogs/${this.state.id}`, {
			headers: {
				Authorization: `Bearer ${this.props.token}`
			}
		})
			.then((res) => {
				alert('Blog Deleted');
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
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>ID of Blog to be Deleted</label>
						<input
							type="id"
							className="form-control"
							id="idField"
							name="id"
							placeholder="Enter ID of The Blog"
							onChange={this.handleInputChange}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Delete Blog
					</button>
				</form>
				<div>To get the ID go back and view all blogs</div>
			</div>
		);
	}
}

export default DeleteBlog;
