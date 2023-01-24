import { FC } from 'react'

import logo from '@images/svg/logo.svg'
import styles from './Header.module.scss'

export const Header: FC = () => {
	return (
		<header className={ styles.root }>
			<a
				className={ styles.logo }
				href='/'
			>
				<img
					src={ logo }
					alt='Circeya Logotype'
				/>
			</a>

			<a
				href='tel:+74954954954'
				className={ styles.telephone }
			>
				+7 (495) 495-49-54
			</a>
		</header>
	)
}
