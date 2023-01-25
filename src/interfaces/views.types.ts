import { SectionPadding } from '@constants/enums'
import { ReactNode } from 'react'

export interface ISection {
	children: ReactNode
	title: string
	padding?: SectionPadding
}

export interface IGridContent {
	title: string
	description: string
	image: string
}
