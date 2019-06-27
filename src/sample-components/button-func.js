import React, { useState } from 'react'

const Button = props => {
	const [buttonText, setButtonText] = useState(
		props.buttonText || 'click this button...'
	)

	const handleClick = () =>
		setButtonText(props.successText || 'good job, buddy!')

	return <button onClick={handleClick}>{buttonText}</button>
}

export default Button
