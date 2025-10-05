import React from 'react'
import Navigation from '@/components/Navigation';
import TechnologySection from '@/components/TechnologyComponent';
import Footer from '@/components/Footer';

export default function Technology() {
  return (
    <div className='min-h-screen'>
      <Navigation/>
      <main>
      <TechnologySection/>
      </main>
      <Footer/>
    </div>
  )
}
