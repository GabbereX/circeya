import { FC } from 'react'

import { ISection } from '@interfaces/views.types'
import { SectionPadding } from '@constants/enums'

import { getPaddingClass } from './Section.utils'

import styles from './Section.module.scss'

export const Section: FC<ISection> = (props) => {
	const {
		children,
		title,
		padding = SectionPadding.NONE
	} = props

	const paddingClass = getPaddingClass(padding)

	return (
		<section
			className={ `${ styles.root } ${ paddingClass }` }
		>
			<h2
				className={ styles.title }
			>
				{ title }
			</h2>
			{ children }
		</section>
	)
}
