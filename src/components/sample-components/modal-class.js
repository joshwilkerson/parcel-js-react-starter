import React, { Fragment } from "react"
import { string, object } from "prop-types"
import styled from "styled-components"

// paste this code in App.js 👇
//
// <Modal buttonText="Open Simple Modal" modalTitle="A Modal!">
//	<p>
//		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//		eiusmod tempor incididunt ut labore et dolore magna aliqua.
//	</p>
// </Modal>

class Modal extends React.Component {
	state = {
		isOpen: false,
	}

	render() {
		const { buttonText, modalTitle, children } = this.props
		const { isOpen } = this.state

		const Modal = styled.div`
			position: fixed;
			background-color: rgba(0, 0, 0, 0.5);
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 999;
			-webkit-transition: all 0.3s;
			-moz-transition: all 0.3s;
			transition: all 0.3s;
			display: ${() => (isOpen ? "block" : "none")};

			div {
				width: 400px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				padding: 2em;
				background: #ffffff;
				color: #333333;
				border-radius: 4px;

				a {
					color: #888;
					line-height: 50px;
					font-size: 80%;
					position: absolute;
					right: 0;
					text-align: center;
					top: 0;
					width: 70px;
					text-decoration: none;
					cursor: pointer;
				}
			}

			h1 {
				font-size: 150%;
				margin: 0 0 15px;
				color: #333333;
			}
		`

		return (
			<Fragment>
				<Modal>
					<div>
						<a onClick={() => this.setState({ isOpen: false })}>Close</a>
						<h1>{modalTitle}</h1>
						{children}
					</div>
				</Modal>

				<button onClick={() => this.setState({ isOpen: true })}>
					{buttonText}
				</button>
			</Fragment>
		)
	}
}

export default Modal

Modal.defaultProps = {
	buttonText: "Click Me!",
}

Modal.propTypes = {
	buttonText: string,
	modalTitle: string,
	children: object,
}
