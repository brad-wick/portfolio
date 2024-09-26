import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import corpcommentImg from '@/public/corpcomment.png'
import muse1 from '@/public/team_muse_awarding_ceremony.jpg'
import muse2 from '@/public/team_muse_blue.jpg'
import muse3 from '@/public/team_muse_sitting.jpg'
import brad from '@/public/brad-presenting.jpg'

export const links = [
  {
    name: 'About Me',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Awards',
    hash: '#awards',
  },
] as const

export const experiencesData = [
  {
    title: "Bachelor's Degree in Computer Systems Engineering",
    location: 'Tepic, Nayarit',
    description:
      'Graduated with a 3.7 GPA, specializing in agile app development and software engineering principles.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Business Intelligence Trainee',
    location: 'Guadalajara, Jalisco',
    description:
      'Interned @TCS, gaining hands-on experience in data analytics, report generation, and SQL optimization techniques.',
    icon: React.createElement(CgWorkAlt),
    date: '2023 - 2024',
  },
  {
    title: 'JR Full-Stack Developer',
    location: 'Guadalajara, Jalisco',
    description:
      '@MiPawMx, I developed modular React.js components for a responsive UI and improved REST API usage through reusable services. Integrated features like recurring subscriptions through Stripe.',
    icon: React.createElement(FaReact),
    date: '2024 - present',
  },
] as const

export const projectsData = [
  {
    title: 'Muse',
    description: 'I worked as a full-stack developer on this academic project',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'TibiaGenius',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: corpcommentImg,
  },
] as const

export const imagesCarousel = [muse1, muse2, muse3, brad]

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Express',
  'PostgreSQL',
  'MySQL',
  'Figma',
  'Penpot',
  'Storybook',
] as const
