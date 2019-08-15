import React from "react"
import { useState, useEffect } from "react"

const Clock = () => {
	const [date, setDate] = useState(new Date())
	const tick = () => setDate(new Date())

	useEffect(() => {
		let timerID = setInterval(() => tick(), 1000)
		return () => clearInterval(timerID)
	})

	const hours = date.getHours()
	let timeOfDay

	if (hours < 12) {
		timeOfDay = "morning"
	} else if (hours >= 12 && hours < 17) {
		timeOfDay = "afternoon"
	} else {
		timeOfDay = "night"
	}

	return (
		<div>
			<h1>Good {timeOfDay}!</h1>
			<h2>It is {date.toLocaleTimeString()}.</h2>
		</div>
	)
}

export default Clock
