export const getIntersectionSlider = (slider: HTMLDivElement): boolean => {
	const header = document.getElementById('header')

	const headerRect = header?.getBoundingClientRect()
	const sliderRect = slider.getBoundingClientRect()

	const sliderPositionY = sliderRect.y - (headerRect?.height ?? 0)

	return sliderPositionY < 0 && sliderPositionY >= -sliderRect.height
}
