import React, { useState } from "react"

const Counter = () => {
	const [count, setCount] = useState(0)

	const increaseCount = () => setCount(count + 1)
	const decreaseCount = () => setCount(count - 1)
	const resetCount = () => setCount(0)

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={increaseCount}>+1</button>
			<button onClick={decreaseCount}>-1</button>
			<button onClick={resetCount}>reset count</button>
		</div>
	)
}

export default Counter
