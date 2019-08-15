import React from "react"
import { string } from "prop-types"

class Button extends React.Component {
	state = {
		buttonText: this.props.buttonText,
		successText: this.props.successText,
	}

	handleClick = () => {
		this.setState({
			buttonText: this.state.successText,
		})
	}

	render() {
		return <button onClick={this.handleClick}>{this.state.buttonText}</button>
	}
}

Button.defaultProps = {
	buttonText: "click this button...",
	successText: "good job, buddy!",
}

Button.propTypes = {
	buttonText: string,
	successText: string,
}

export default Button
