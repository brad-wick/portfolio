import { links } from './data'

export type SectionName = (typeof links)[number]['name']
export type ChildrenProps = { children: React.ReactNode }
export type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}
