import React from 'react'

class Counter extends React.Component {
	state = {
		count: 0,
	}

	handleIncreaseCount = () => {
		this.setState(prevState => ({ count: prevState.count + 1 }))
	}

	handleDecreaseCount = () => {
		this.setState(prevState => ({ count: prevState.count - 1 }))
	}

	handleResetCount = () => {
		this.setState(() => ({ count: 0 }))
	}

	render() {
		return (
			<div className="counterWrapper">
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleIncreaseCount}>+1</button>
				<button onClick={this.handleDecreaseCount}>-1</button>
				<button onClick={this.handleResetCount}>reset count</button>
			</div>
		)
	}
}

Counter.defaultProps = {
	count: 0,
}

export default Counter
