import React, { Component } from 'react';
import Axios from 'axios';

class CreateBlog extends Component {
	state = {
		title: '',
		author: '',
		body: ''
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const data = this.state;
		Axios.post(
			'https://newblogz1800.herokuapp.com/blogs',
			{
				title: data.title,
				author: data.author,
				body: data.body
			},
			{
				headers: {
					Authorization: `Bearer ${this.props.token}`
				}
			}
		)
			.then((res) => {
				alert('Blog Created');
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
						<label>Title</label>
						<input
							type="title"
							className="form-control"
							id="titleField"
							name="title"
							placeholder="Enter title"
							onChange={this.handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label>Author</label>
						<input
							type="author"
							className="form-control"
							id="authorField"
							name="author"
							placeholder="Enter Author Name"
							onChange={this.handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label>Body</label>
						<input
							type="Body"
							className="form-control"
							id="bodyField"
							name="body"
							placeholder="Body"
							onChange={this.handleInputChange}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Create Blog
					</button>
				</form>
			</div>
		);
	}
}

export default CreateBlog;
