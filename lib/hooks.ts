import { useActiveSectionContext } from '@/context/active-section-context'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from '@/lib/types'

export function useSectionInView(
  sectionName: SectionName,
  threshold: number = 0.5
) {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [sectionName, inView, setActiveSection, timeOfLastClick])

  return {
    ref,
  }
}
