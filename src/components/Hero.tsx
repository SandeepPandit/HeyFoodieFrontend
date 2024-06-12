
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const Hero = () => {
  return (
    <div className="w-full max-h-[600px] object-cover flex">

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Hero;
