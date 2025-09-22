import React from 'react'
import Navigation from '@/components/Navigation';
import VizxHi from '@/components/VizxHi';
import Footer from '@/components/Footer';

export default function VizxHI() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
    <main>
        <VizxHi/>
    </main>
        <Footer/>
    </div>
  )
}
