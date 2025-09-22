import React from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HealthcareComponent from '@/components/HealthCareComponent';

export default function Healthcare() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
        <main>
            <HealthcareComponent/>
        </main>
        <Footer/>

    </div>
  )
}
