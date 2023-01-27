import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { FC, useEffect, useRef } from 'react'

import { sliderImages } from '@constants/views.consts'

import styles from './Slider.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const Slider: FC = () => {
	const animationWrapRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const isTouchPad =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
				.test(navigator.userAgent)
		// ('ontouchstart' in window) ||
		// (navigator.maxTouchPoints > 0)

		const section = document.getElementById('slider')

		if (!isTouchPad) {
			const animationWrap = animationWrapRef.current
			const header =
				(document.getElementById('header') as HTMLHeadingElement)
					.getBoundingClientRect().height ?? 0

			if (animationWrap && section) {
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
						start: `top top+=${ header }px`,
						end: () => '+=' + (animationWrap.scrollWidth - window.innerWidth),
						pin: section,
						invalidateOnRefresh: true,
						scrub: true
					}
				})
			}
		} else {
			section?.classList.add(styles.touch_scroll)
		}

	}, [])

	return (
		<div>
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

