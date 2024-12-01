'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'

const Carousel_custom = () => {
  return (
    <div>
        <Carousel className="w-1/4 mb-8" plugins={[Autoplay({delay:3000})]} >
    <CarouselContent className="">
    <CarouselItem className="rounded-full">
    <div className="relative">
        <img className="rounded-full w-full h-full" src="/images/one.jpg" height={'400px'} width={'400px'} />
        <div className="absolute inset-0 overlay rounded-full"></div>
        <span className="absolute inset-0 text-white font-semibold text-2xl flex items-center justify-center text-center">
        <p className="w-1/2 font-mono overlay-text-size">Scheduling meetings now is just a single click</p>
        </span>
        </div>
      </CarouselItem>
      <CarouselItem className="rounded-full">
      <div className="relative">
        <img className="rounded-full w-full h-full" src="/images/two.jpg" height={'400px'} width={'400px'} />
        <div className="absolute inset-0 overlay rounded-full"></div>
        <span className="absolute inset-0 text-white font-semibold text-2xl flex items-center justify-center text-center">
        <p className="w-1/2 font-mono overlay-text-size">For faster and advanced video calling options</p>
        </span>
        </div>
      </CarouselItem>
      <CarouselItem className="rounded-full">
        <div className="relative">
        <img className="rounded-full w-full h-full" src="/images/three.jpg" height={'400px'} width={'400px'} />
        <div className="absolute inset-0 overlay rounded-full"></div>
        <span className="absolute inset-0 text-white font-semibold flex items-center justify-center text-center">
        <p className="w-1/2 font-mono overlay-text-size">Sign up, and get VIP access free for 30 days</p>
        </span>
        </div>
      </CarouselItem>
    </CarouselContent>
    {/* <CarouselPrevious />
    <CarouselNext /> */}
  </Carousel>
    </div>
  )
}

export default Carousel_custom
