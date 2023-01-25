import { FC } from 'react'

import { IGridContent } from '@interfaces/views.types'

import styles from './GridSection.module.scss'

interface IProps {
	content: Array<IGridContent>
}

export const GridSection: FC<IProps> = ({ content }) => {
	return (
		<div>
			{
				content.map(({ image, title, description }, index) =>
					<div
						key={ index }
						className={ styles.root_content }
					>
						<img
							src={ image }
							alt={ `Image ${ title }` }
							className={ styles.image }
						/>
						<div>
							<h3>
								{ title }
							</h3>
							<p>
								{ description }
							</p>
						</div>
					</div>)
			}
		</div>
	)
}
