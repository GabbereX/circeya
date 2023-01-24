import { FC } from 'react'

import logo from '@images/svg/logo.svg'
import styles from './Header.module.scss'

const Header: FC = () => {
	console.log(logo)
	return (
		<header className={ styles.root }>
			{/*<img*/ }
			{/*	src={ logo }*/ }
			{/*	alt='Circeya Logotype'*/ }
			{/*/>*/ }
		</header>
	)
}

export default Header
