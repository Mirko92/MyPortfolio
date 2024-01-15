import { PageHeader } from './PageHeader'
import { MyEducation } from './MyEducation'
import { MyExperiences } from './MyExperiences'
import { MySkills } from './MySkills'
import MyComponent from '@/components/TestIntersectionObserver'

export default function Home() {
  return (
    <main
      className="
        h-screen overflow-y-auto scroll-smooth
        snap-mandatory snap-y
      "
    >
      <PageHeader />

      <MySkills />

      <MyEducation />
 
      <MyExperiences />

      <div className='snap-start h-screen'>
        <MyComponent />
      </div>
    </main>
  )
}
