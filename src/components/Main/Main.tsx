import { FC } from 'react'

import { SectionPadding } from '@constants/enums'
import { sectionGridContentOne, sectionGridContentTwo } from '@constants/views.consts'

import { Section } from '@components/Section'
import { GridSection } from '@components/GridSection'
import { Slider } from '@components/Slider'

export const Main: FC = () => {
	return (
		<main>
			<Section
				title='ut aliquip ex ea commodo consequat'
				padding={ SectionPadding.RIGHT }
			>
				<GridSection content={ sectionGridContentOne } />
			</Section>
			<Section
				title='Lorem ipsum dolor sit amet'
				id='slider'>
				<Slider />
			</Section>
			<Section
				title='ut aliquip ex ea commodo consequat'
				padding={ SectionPadding.RIGHT }
			>
				<GridSection content={ sectionGridContentTwo } />
			</Section>
		</main>
	)
}
