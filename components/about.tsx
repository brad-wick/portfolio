"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.section className='mb-28 max-w-[37rem] sm:mb-0 text-center leading-8'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}>
            <SectionHeading>About Me</SectionHeading>
            <p className='mb-3'>
                During college, I found a genuine interest in web development, which naturally led me to pursue it as my career. The blend of <strong>{" "}creativity{" "}
                </strong> and <strong>{" "}problem-solving{" "}
                </strong> in this field has kept me engaged and motivated ever since.
            </p>
            <p className='mb-3'>
                When it comes to coding, my favorite tech stack is{" "}
                <strong>React, Next.js, Node.js, TypeScript, TailwindCSS</strong>{" "}and{" "}
                <strong>Prisma.</strong>{" "}
                I&apos;m always exploring new technologies and frameworks to improve my skills.
            </p >
            <p className='mb-3'>I&apos;m currently looking for a
                <strong> full-time position</strong> as a software developer.</p>
        </motion.section>
    )
}
