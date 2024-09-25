"use client"

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'
import { useRef } from 'react'


type ProjectProps = typeof projectsData[number]
export default function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {

    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 1])

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: scaleOpacity
            }}
            className='group mb-3 sm:mb-8 last:mb-0'>
            <section
                className='bg-gray-100 max-w-[40rem] rounded-lg border border-violet-950 overflow-hidden sm:pr-8 relative sm:h-[23rem] hover:bg-gray-200 transition cursor-pointer'>
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[21rem]'>
                    <h3 className='text-2xl font-semibold mb-2 leading-relaxed'>{title}</h3>
                    <p className='mt-2 mb-4 leading-relaxed text-gray-800'>{description}</p>
                    <ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li key={index}
                                className='bg-violet-950/[0.7] px-3 py-1 text-sm uppercase tracking-wider text-white rounded-full'>{tag}</li>
                        ))}
                    </ul>
                </div>

                <Image src={imageUrl} alt={`Project I worked on ${title}`} quality={95}
                    className='
                        absolute 
                        -right-40 
                        top-8 
                        w-[28.25rem] 
                        rounded-tr 
                        shadow-2xl
                        transition
                        group-hover:scale-[1.05]
                        group-hover:-translate-x-3
                        group-hover:translate-y-3
                        group-hover:-rotate-3
                        group-even:right-[initial] group-even:-left-40
                        group-even:group-hover:translate-x-3
                        group-even:group-hover:translate-y-3
                        group-even:group-hover:rotate-3'/>
            </section>
        </motion.div>
    )
}