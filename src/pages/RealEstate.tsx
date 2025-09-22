import React from 'react';
import Navigation from '@/components/Navigation';
import RealEstateComponent from '@/components/RealEstateComponent';
import Footer from '@/components/Footer';
export default function RealEstate() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
        <main>
            <RealEstateComponent/>
        </main>
        <Footer/>
    </div>
  )
}
