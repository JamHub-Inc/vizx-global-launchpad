import React from 'react'
import Navigation from '@/components/Navigation';
import WhyKE from '@/components/WhyKenya';
import Footer from '@/components/Footer';

export default function WhyKenya() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
        <main>
            <WhyKE/>
        </main>
    <Footer/>
    </div>
  )
}
