import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { FC, useEffect, useRef } from 'react'

import { sliderImages } from '@constants/views.consts'

import styles from './Slider.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const Slider: FC = () => {
	const pinWrapRef = useRef<HTMLDivElement>(null)
	const animationWrapRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const pinWrap = pinWrapRef.current
		const animationWrap = animationWrapRef.current
		// const section = pinWrap?.parentNode as HTMLDivElement
		const section = document.getElementById('slider')

		if (pinWrap && animationWrap && section) {
			const animationWrapPadding =
				+window
					.getComputedStyle(animationWrap).paddingLeft
					.replace('px', '')

			gsap.fromTo(animationWrap, {
				x: 0
			}, {
				x: () => -((animationWrap.scrollWidth - window.innerWidth) + animationWrapPadding),
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top top',
					end: '+=' + ((animationWrap.scrollWidth - window.innerWidth / 4)),
					pin: pinWrap,
					// pinnedContainer: section,
					invalidateOnRefresh: true,
					scrub: true
					// pinSpacer: section
					// anticipatePin: 1
					// markers: true
				}
			})
		}
	}, [])

	return (
		<div
			ref={ pinWrapRef }
			// style={ {
			// 	minHeight: '100%'
			// } }
		>
			<div
				ref={ animationWrapRef }
				className={ styles.root }
				// style={ {
				// 	minHeight: '100%'
				// } }
			>
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
		</div>
	)
}

