import { FC } from 'react'

import styles from './Footer.module.scss'

export const Footer: FC = () => {
	return (
		<footer className={ styles.root }>
			© TEST, 1022–2022
		</footer>
	)
}
