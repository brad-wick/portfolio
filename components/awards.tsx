'use client'

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { imagesCarousel } from '@/lib/data'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

export default function Awards() {
  const { ref } = useSectionInView('Awards')
  const plugin = React.useRef(Autoplay({ delay: 3000 }))

  return (
    <section
      ref={ref}
      id='awards'
      className='max-w-[40rem] mb-20 scroll-mt-28 relative'
    >
      <SectionHeading>Awards</SectionHeading>
      <div className='max-w-[24rem] flex flex-col gap-1 text-center items-center border border-violet-950 rounded-lg bg-gray-100'>
        <Carousel
          opts={{
            active: true,
            align: 'center',
            loop: true,
          }}
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {imagesCarousel.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  className='rounded-t-lg'
                  src={image}
                  alt={`Award image ${index}`}
                  priority
                  quality={90}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden' />
          <CarouselNext className='hidden' />
        </Carousel>

        <div className='flex flex-col gap-2 px-5 py-2'>
          <span className='text-2xl'>
            <strong>Muse</strong>
          </span>
          <span>
            Muse is a web platform that connects culture and technology,
            providing a safe space for independent artists and cultural
            organizations to showcase the region&apos;s cultural identity. It
            offers tools for distributing, selling, and purchasing art, aiming
            to reduce the tech gap and ensure art is fairly valued.
          </span>
          <span className='font-bold text-sm'>INNOVATEC 2022</span>
          <span className='font-bold text-sm'>
            Muse won 3rd place at the nationals in the Industry 4.0 category.
          </span>
        </div>
      </div>
    </section>
  )
}
