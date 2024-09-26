'use client'

import React, { Fragment } from 'react'
import SectionHeading from './section-heading'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

export default function Experience() {
  const { ref } = useSectionInView('Experience')
  return (
    <motion.section
      ref={ref}
      id='experience'
      className='max-w-[55rem] scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor='#2e1065'>
        {experiencesData.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(46, 16, 101, 1.0)',
                textAlign: 'left',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
              }}
              contentArrowStyle={{
                borderRight: '0.5rem solid #2e1065',
              }}
              dateClassName='ml-3 mr-4'
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'white',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <h4 className='font-normal !mt-0'>{item.location}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  )
}
