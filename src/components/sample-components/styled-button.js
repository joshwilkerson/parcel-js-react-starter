import React from "react"
import styled from "styled-components"
import { bool, string } from "prop-types"

const Button = props => {
	const { rounded, text } = props

	const Button = styled.a`
		border: none;
		font-family: inherit;
		font-size: inherit;
		color: inherit;
		background: none;
		cursor: pointer;
		padding: 25px 80px;
		display: inline-block;
		margin: 15px 0;
		text-transform: uppercase;
		user-select: none;
		letter-spacing: 1px;
		font-weight: 700;
		outline: none;
		position: relative;
		background: #3498db;
		color: #fff;
		box-shadow: 0 6px #2980b9;
		border-radius: ${() => (rounded ? "6px" : 0)};

		&:hover {
			box-shadow: 0 4px #2980b9;
			top: 2px;
		}

		&:active {
			box-shadow: 0 0 #2980b9;
			top: 6px;
		}
	`

	return <Button>{text}</Button>
}

Button.propTypes = {
	rounded: bool,
	text: string,
}

export default Button
