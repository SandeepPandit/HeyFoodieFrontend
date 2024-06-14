
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import "animate.css"

const OPTIONS: EmblaOptionsType = { loop: true }


const Hero = () => {
  return (

    <div className="w-full max-h-[600px] object-cover flex ">

      <EmblaCarousel options={OPTIONS} />
    </div>

  );
};

export default Hero;
