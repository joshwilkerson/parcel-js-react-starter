import React, { useState } from "react"

const Login = () => {
	const [isLoggedIn, setLogInOut] = useState(false)
	const handleButtonClick = () => setLogInOut(!isLoggedIn)

	return (
		<div>
			{isLoggedIn ? <p>you are logged in</p> : <p>please login now</p>}

			<button onClick={handleButtonClick}>
				log {isLoggedIn ? "out" : "in"}
			</button>
		</div>
	)
}

export default Login
