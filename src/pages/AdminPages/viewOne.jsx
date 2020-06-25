import React, { Component } from 'react';

class ViewOne extends Component {
	render() {
		return (
			<div className="card text-center m-5">
				<img
					className="card-img-top"
					src="https://www.androidguys.com/wp-content/uploads/2018/07/abstraction_sharp_figure_101902_1600x1200.jpg"
					alt="Cardcap"
				/>
				<div className="card-header" style={{ fontSize: 15 }}>
					{this.props.id}
				</div>
				<div className="card-body">
					<h5 className="card-title" style={{ fontSize: 30 }}>
						{this.props.title}
					</h5>
					<h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: 23 }}>
						{this.props.author}
					</h6>
					<p className="card-text" style={{ fontSize: 20 }}>
						{this.props.body}
					</p>
					<div className="card-footer">
						<div className="badge badge-primary mr-auto" style={{ fontSize: 15 }}>
							likes:{this.props.likes}
						</div>
						<div className="mr-auto" style={{ fontSize: 15 }}>
							{this.props.date.split('T')[0]}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ViewOne;
