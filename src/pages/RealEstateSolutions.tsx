import React from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RealEstate from '@/components/RealEstate';
export default function RealEstateSolutions() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
        <main>
         <RealEstate/>
        </main>
        <Footer/>

    </div>
  )
}
