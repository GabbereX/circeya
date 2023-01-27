import {FC, useEffect, useLayoutEffect, useRef} from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import {SectionPadding} from '@constants/enums'
import {sectionGridContentOne, sectionGridContentTwo} from '@constants/views.consts'

import {Section} from '@components/Section'
import {GridSection} from '@components/GridSection'
import {Slider} from '@components/Slider'

gsap.registerPlugin(ScrollTrigger)


export const Main: FC = () => {

    const mainRef = useRef(document.createElement("div"));

    useLayoutEffect(() => {
        const animationWrap = document?.querySelector('#animationWrap') || 0;
        const ctx = gsap.context((self) => {

            gsap.to('#animationWrap',
                {
                    x: () => -((animationWrap ? animationWrap.scrollWidth : 0) - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: '#slider',
                        start: "top top",
                        end: () => "+=" + ((animationWrap ? animationWrap.scrollWidth : 0) - window.innerWidth),
                        pin: '#pinWrap',
                        invalidateOnRefresh: true,
                        //anticipatePin: 1,
                        scrub: true,
                        //markers: true,
                    }
                });


        }, mainRef);
        return () => ctx.revert();
    }, []);


    return (
        <main ref={mainRef}>
            <Section
                title='ut aliquip ex ea commodo consequat'
                padding={SectionPadding.RIGHT}
            >
                <GridSection content={sectionGridContentOne}/>
            </Section>
            <Section
                title='Lorem ipsum dolor sit amet'
                id='slider'>
                <Slider/>
            </Section>
            <Section
                title='ut aliquip ex ea commodo consequat'
                padding={SectionPadding.RIGHT}
            >
                <GridSection content={sectionGridContentTwo}/>
            </Section>
        </main>
    )
}
