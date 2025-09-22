import React from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ManufucteringComponent from '@/components/ManufucteringComponent';

export default function Manufuctering() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
        <main>
        <ManufucteringComponent/>
        </main>
        <Footer/>
    </div>
  )
}
