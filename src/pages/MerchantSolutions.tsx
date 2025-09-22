import React from 'react'
import Navigation from '@/components/Navigation';
import MerchantServices from '@/components/MerchantServices';
import Footer from '@/components/Footer';

export default function MerchantSolutions() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
        <main>
        <MerchantServices/>
        </main>
        <Footer/>
    </div>
  )
}
