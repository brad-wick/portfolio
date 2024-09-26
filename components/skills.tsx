'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'

export default function Skills() {
  const { ref } = useSectionInView('Skills')
  return (
    <section
      ref={ref}
      id='skills'
      className='mb-28 max-w-[37rem] sm:mb-0 scroll-mt-28'
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-3 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className='bg-white border p-4 border-black/[0.1] rounded-xl'
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
