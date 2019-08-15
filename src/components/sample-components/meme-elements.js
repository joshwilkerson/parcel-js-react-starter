import styled from "styled-components"

export const MemeWrapper = styled.div`
	display: block;
	width: 100%;
	max-width: 600px;
	border: 1px solid #dadada;

	header {
		background: #8e44ad;
		padding: 10px 16px;
		color: #fff;
		font-weight: bold;
		font-size: 1.5em;
	}
`

export const MemeForm = styled.form`
	display: flex;
	align-items: stretch;
	justify-content: space-between;
	padding: 10px 12px;

	input {
		flex: 1;
		margin: 0 4px;
		padding: 0 8px;
		box-sizing: border-box;
		border: 1px solid #dadada;

		:focus {
			outline: none;
			border: 1px solid #8e44ad;
		}
	}

	button {
		background: #9b59b6;
		color: #fff;
		outline: none;
		border: none;
		cursor: pointer;
		padding: 10px 14px;
		text-transform: uppercase;
		font-size: 0.8em;
		letter-spacing: 0.05em;
		font-weight: bold;
		margin: 0 0 0 8px;
		white-space: nowrap;
	}
`

export const MemeImage = styled.div`
	display: block;
	position: relative;

	img {
		max-width: 100%;
		display: block;
		margin: 0 auto;
	}

	h2 {
		font-family: impact, sans-serif;
		font-size: 2em;
		text-transform: uppercase;
		color: white;
		letter-spacing: 1px;
		text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
			-2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
			2px 2px 5px #000;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;

		&:first-of-type {
			top: 0;
		}

		&:last-of-type {
			bottom: 0;
		}
	}
`
