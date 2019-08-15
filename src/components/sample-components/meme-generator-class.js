import React from "react"
import { MemeWrapper, MemeForm, MemeImage } from "./meme-elements"

class MemeGenerator extends React.Component {
	state = {
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
		allMemeImgs: [],
	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(response => {
				const { memes } = response.data
				this.setState({ allMemeImgs: memes })
			})
	}

	handleInputChange = event => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}

	getRandomImage = event => {
		event.preventDefault()
		const array = this.state.allMemeImgs
		const randomItem = array[Math.floor(Math.random() * array.length)]
		this.setState({ randomImage: randomItem.url })
	}

	render() {
		const { topText, bottomText, randomImage } = this.state
		return (
			<MemeWrapper>
				<header>Random Meme Generator</header>
				<MemeForm onSubmit={this.getRandomImage}>
					<input
						type="text"
						name="topText"
						placeholder="Top Text"
						value={topText}
						onChange={this.handleInputChange}
					/>
					<input
						type="text"
						name="bottomText"
						placeholder="Bottom Text"
						value={bottomText}
						onChange={this.handleInputChange}
					/>
					<button>refresh</button>
				</MemeForm>

				<MemeImage>
					<img src={randomImage} alt="random meme" />
					<h2 className="top">{topText}</h2>
					<h2 className="bottom">{bottomText}</h2>
				</MemeImage>
			</MemeWrapper>
		)
	}
}

export default MemeGenerator
