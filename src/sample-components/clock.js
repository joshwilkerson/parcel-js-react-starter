import React from 'react'

class Clock extends React.Component {
	state = { date: new Date() }

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	tick() {
		this.setState({
			date: new Date(),
		})
	}

	render() {
		const { date } = this.state

		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {date.toLocaleTimeString()}.</h2>
			</div>
		)
	}
}

export default Clock
