import { SectionPadding } from '@constants/enums'

export const getPaddingClass = (padding: SectionPadding): string => {
	switch (padding) {
		case SectionPadding.RIGHT:
			return 'pr-section'
		case SectionPadding.LEFT:
			return 'pl-section'
		default:
			return ''
	}
}
