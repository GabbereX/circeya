import { FC } from 'react'

import { sliderImages } from '@constants/views.consts'

import styles from './Slider.module.scss'

export const Slider: FC = () => {
	return (
		<div className={ styles.root }>
			{
				sliderImages.map((image, index) => {
					return (
						<img
							key={ index }
							src={ image }
							alt={ `Slide ${ index + 1 }` }
							className={ styles.image }
						/>
					)
				})
			}
		</div>
	)
}
