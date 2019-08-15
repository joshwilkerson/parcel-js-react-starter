import React, { useState, useEffect } from "react"
import { MemeWrapper, MemeForm, MemeImage } from "./meme-elements"

const MemeGenerator = () => {
	const [{ topText, bottomText }, setText] = useState({
		topText: "",
		bottomText: "",
	})
	const [randomImage, setRandomImage] = useState(
		"http://i.imgflip.com/1bij.jpg"
	)
	const [allMemeImgs, setAllMemeImgs] = useState([])

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(response => {
				const { memes } = response.data
				setAllMemeImgs(memes)
			})
	})

	const handleInputChange = ({ target: { name, value } }) => {
		setText(prevState => ({ ...prevState, [name]: value }))
	}

	const getRandomImage = event => {
		event.preventDefault()
		const randomItem =
			allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)]
		setRandomImage(randomItem.url)
	}

	return (
		<MemeWrapper>
			<header>Random Meme Generator</header>
			<MemeForm onSubmit={getRandomImage}>
				<input
					type="text"
					name="topText"
					placeholder="Top Text"
					value={topText}
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="bottomText"
					placeholder="Bottom Text"
					value={bottomText}
					onChange={handleInputChange}
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

export default MemeGenerator
