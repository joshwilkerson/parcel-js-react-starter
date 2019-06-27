import React from 'react'

class Button extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			buttonText: this.props.buttonText,
			successText: this.props.successText,
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState({
			buttonText: this.state.successText,
		})
	}

	render() {
		return <button onClick={this.handleClick}>{this.state.buttonText}</button>
	}
}

Button.defaultProps = {
	buttonText: 'click this button...',
	successText: 'good job, buddy!',
}

export default Button
