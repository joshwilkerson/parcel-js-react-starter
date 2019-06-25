import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Counter from './js/counter'

import './sass/main.scss'

const App = () => {
	return (
		<Fragment>
			<h1>👋 Parcel JS starter</h1>
			<Counter />
		</Fragment>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
	module.hot.accept()
}
