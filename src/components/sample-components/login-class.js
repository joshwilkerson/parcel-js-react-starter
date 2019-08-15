import React from "react"

class Login extends React.Component {
	state = {
		isLoggedIn: false,
	}

	handleButtonClick = () => {
		this.setState(prevState => ({
			isLoggedIn: !prevState.isLoggedIn,
		}))
	}

	render() {
		return (
			<div>
				{this.state.isLoggedIn ? (
					<p>you are logged in</p>
				) : (
					<p>please login now</p>
				)}

				<button onClick={this.handleButtonClick}>
					{this.state.isLoggedIn ? "log out" : "log in"}
				</button>
			</div>
		)
	}
}

export default Login
