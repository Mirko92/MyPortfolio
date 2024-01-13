import Link from 'next/link'
import { PageHeader } from './PageHeader'
import { MyEducation } from './MyEducation'
import { MyExperiences } from './MyExperiences'
import { MySkills } from './MySkills'
import { MpSection } from '@/components/MpSection'

export default function Home() {
  return (
    <main
      className="
        h-screen overflow-scroll
        snap-mandatory snap-y
      "
    >
      <PageHeader />

      <MySkills />

      <MyEducation />

      <MyExperiences />
    </main>
  )
}
