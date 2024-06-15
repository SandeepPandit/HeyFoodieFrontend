import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import pizza from "../assets/Pizza.jpeg";
import momos from "../assets/Momos.jpeg";
import noodles from "../assets/Noodles.jpeg";
import samosa from "../assets/Samosa.jpeg";



type PropType = {
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onNavButtonClick
    )

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)

    return (
        <section className="embla ">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    < div className="embla__slide" >
                        <img src={pizza} className="aspect-video embala__slide__number border-2 border-purple-600" />
                    </div >
                    <div className="embla__slide" >
                        <img src={noodles} className="aspect-video embala__slide__number border-2 border-purple-600" />
                    </div>
                    <div className="embla__slide" >
                        <img src={samosa} className="aspect-video embala__slide__number border-2 border-purple-600" />
                    </div>
                    <div className="embla__slide" >
                        <img src={momos} className="aspect-video embala__slide__number border-2 border-purple-600" />
                    </div>
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel











