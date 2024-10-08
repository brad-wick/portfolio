'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import profilePicture from '@/public/profile-pic.png'
import { useSectionInView } from '@/lib/hooks'
import { MdEmail } from 'react-icons/md'

export default function Intro() {
  const { ref } = useSectionInView('About Me')
  return (
    <section
      ref={ref}
      id='about'
      className='mb-28 max-w-[37rem] sm:mb-0 scroll-mt-48'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.25,
            }}
          >
            <Image
              src={profilePicture}
              alt='Portrait of Bradley Flores'
              width={150}
              height={150}
              quality={95}
              priority
              className='rounded-full object-cover border-[0.3rem] border-white shadow-2xl'
            />
          </motion.div>
          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              delay: 0.1,
              duration: 1.5,
            }}
          >
            👋🏽
          </motion.span>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 py-4 text-2xl font-medium text-center leading-[1.5]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <strong></strong>
        <span>
          <strong>Hi, I&apos;m Bradley,</strong> a {''}
          <strong>software engineer</strong> based in Mexico. I specialize in{' '}
          <strong>full-stack</strong> development, working primarily with{' '}
          <strong>React, Node.js, TypeScript</strong> and{' '}
          <strong>PostgreSQL.</strong>
        </span>
      </motion.h1>
      <motion.div
        className='flex gap-3 flex-col sm:flex-row items-center justify-evenly text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          className='flex items-center justify-center gap-2 bg-violet-950 px-7 py-3 text-white 
                    rounded-full transition hover:scale-110 outline-none focus:scale-110 active:scale-95'
          href='mailto:bradflores.dev@gmail.com'
        >
          Drop me an email
          <MdEmail />
        </Link>
        <a
          className='flex items-center justify-center gap-2 bg-white border border-violet-950 px-7 py-3 text-gray-950 rounded-full transition hover:scale-110 outline-none focus:scale-110 active:scale-95 cursor-pointer'
          href='/CV.pdf'
          download
        >
          Download CV
          <HiDownload />
        </a>
        <a
          className='flex items-center justify-center gap-2 bg-white border border-violet-950 p-4 transition hover:scale-110 rounded-full cursor-pointer'
          href='https://www.linkedin.com/in/bradley-flores/'
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <a
          className='flex items-center justify-center gap-2 bg-white border border-violet-950 p-4 transition hover:scale-110 rounded-full cursor-pointer'
          href='https://github.com/brad-wick'
          target='_blank'
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  )
}

/**
 *
 * I’m a software engineer committed to delivering pixel-perfect, intuitive user interfaces that ensure high-performance and seamless experiences,
 *
 */
