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
    <section ref={ref} id='awards' className='max-w-[35rem] mb-20 scroll-mt-28'>
      <SectionHeading>Awards</SectionHeading>
      <div className='flex flex-col gap-1 text-center items-center border border-violet-950 rounded-lg bg-gray-100'>
        <Carousel
          opts={{
            active: true,
            align: 'center',
            loop: true,
          }}
          plugins={[plugin.current]}
          className='w-full'
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

        <div className='flex flex-col gap-2 px-5 py-5'>
          <span className='text-2xl'>
            <strong>Muse</strong>
          </span>
          <span>
            Muse is a web platform aimed at transforming the fusion of
            technology and culture, creating a safe space for independent
            artists and cultural organizations to share the richness of our
            region&apos;s cultural identity. It seeks to integrate tools for art
            distribution, sales, and purchases while minimizing cultural
            technological lag and the undervaluation of art.
          </span>
          <span className='font-bold text-sm'>INNOVATEC 2022</span>
          <span className='font-bold text-sm'>
            3rd place in the Industry 4.0 category
          </span>
        </div>
      </div>
    </section>
  )
}
