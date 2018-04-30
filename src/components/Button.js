import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>
				<button>{this.props.title}</button>
			</div>
		);
	}
}

export default Button;