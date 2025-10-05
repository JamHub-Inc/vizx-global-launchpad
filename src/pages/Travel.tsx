import React from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TravelComponent from '@/components/TravelComponent';

export default function Travel() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
        <main>
         <TravelComponent/>
        </main>
        <Footer/>
    </div>
  )
}
