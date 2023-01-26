import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { FC, useEffect, useRef } from 'react'

import { sliderImages } from '@constants/views.consts'

import styles from './Slider.module.scss'

export const Slider: FC = () => {
	const pinWrapRef = useRef<HTMLDivElement>(null)
	const animationWrapRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const pinWrap = pinWrapRef.current
		const animationWrap = animationWrapRef.current
		const section = pinWrap?.parentNode as HTMLDivElement

		if (pinWrap && animationWrap && section) {
			gsap.registerPlugin(ScrollTrigger)

			// const value = -(animationWrap.scrollWidth - window.innerWidth)

			console.log(animationWrap.scrollWidth)

			gsap.fromTo(animationWrap, {
				x: 0
			}, {
				x: () => -(animationWrap.scrollWidth - window.innerWidth),
				ease: 'none',
				scrollTrigger: {
					trigger: section,
					start: 'top top',
					end: '+=' + (animationWrap.scrollWidth - window.innerWidth),
					pin: pinWrap,
					invalidateOnRefresh: true,
					scrub: true
				}
			})
		}
	}, [])

	return (
		<div ref={ pinWrapRef }>
			<div
				ref={ animationWrapRef }
				className={ styles.root }
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

