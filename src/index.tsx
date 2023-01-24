import './assets/styles/styles.global.scss'

import { Fragment, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header/Header'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)
root.render(
	<StrictMode>
		<Fragment>
			<Header />
			<main>
				Here Main
			</main>
		</Fragment>
	</StrictMode>
)
