'use client'
import { PageHeader }    from './PageHeader';
import { MyEducation }   from './MyEducation';
import { MyExperiences } from './MyExperiences';
import { MainSkills }      from './MySkills';
import MyComponent       from '@/components/TestIntersectionObserver';
import Script            from 'next/script';

export default function Home() {
  return (
    <main
      className="
        h-screen overflow-y-auto scroll-smooth
        snap-mandatory snap-y
      "
    >
      <PageHeader />

      <MainSkills />

      <MyEducation />
 
      <MyExperiences />

      {/* <div className='snap-start h-screen'>
        <MyComponent />
      </div> */}

      {/* A simple script to add a mouse effect */}
      <Script 
        id="effects"
        src='/effects.js' 
        strategy='lazyOnload' 
      />
    </main>
  )
}
