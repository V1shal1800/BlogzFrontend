import React, { Component } from 'react';
import Axios from 'axios';

class EditBlog extends Component {
	state = {
		id: '',
		propName: '',
		value: ''
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const data = this.state;
		Axios.patch(
			`https://newblogz1800.herokuapp.com/blogs/${this.state.id}`,
			[
				{
					propName: data.propName,
					value: data.value
				}
			],
			{
				headers: {
					Authorization: `Bearer ${this.props.token}`
				}
			}
		)
			.then((res) => {
				alert('Blog Updated');
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
						<label>ID of Blog to be Updated</label>
						<input
							type="id"
							className="form-control"
							id="idField"
							name="id"
							placeholder="Enter ID of The Blog"
							onChange={this.handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label>Name of Property</label>
						<input
							type="propName"
							className="form-control"
							id="propField"
							name="propName"
							placeholder="Enter Property Name"
							onChange={this.handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label>New Value</label>
						<input
							type="value"
							className="form-control"
							id="valueField"
							name="value"
							placeholder="Enter updated Value"
							onChange={this.handleInputChange}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Update Blog
					</button>
				</form>
				<div>To get the ID go back and view all blogs</div>
			</div>
		);
	}
}

export default EditBlog;
