import React, { Component } from 'react';
import ViewOne from './viewOne';
import axios from 'axios';

class ViewAll extends Component {
	state = {
		blogs: []
	};

	componentDidMount() {
		axios
			.get('https://newblogz1800.herokuapp.com/blogs')
			.then((res) => {
				this.setState({ blogs: res.data.blogs });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className="container">
				<ul style={{ listStyleType: 'none' }}>
					{this.state.blogs.map((blog) => (
						<li key={blog._id}>
							<ViewOne
								title={blog.title}
								author={blog.author}
								body={blog.body}
								date={blog.date}
								likes={blog.likes}
								id={blog._id}
							/>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default ViewAll;
