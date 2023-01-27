import './assets/styles/styles.global.scss'

import { Fragment } from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from '@components/Header'
import { Main } from '@components/Main'
import { Footer } from '@components/Footer'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	<>
		<Fragment>
			<Header />
			<Main />
			<Footer />
		</Fragment>
	</>
)
