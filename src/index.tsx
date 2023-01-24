import './assets/styles/styles.global.scss'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)
root.render(
	<StrictMode>
		<div>
			Hello World
			<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
		</div>
	</StrictMode>
)
