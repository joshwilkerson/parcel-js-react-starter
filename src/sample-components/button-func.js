import React, { useState } from 'react'
import { string } from 'prop-types'

const Button = props => {
	const [buttonText, setButtonText] = useState(
		props.buttonText || 'click this button...'
	)

	const handleClick = () =>
		setButtonText(props.successText || 'good job, buddy!')

	return <button onClick={handleClick}>{buttonText}</button>
}

Button.propTypes = {
	buttonText: string,
	successText: string
}

export default Button
