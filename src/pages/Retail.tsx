import React from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RetailComponent from '@/components/RetailComponent';

export default function Retail() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
        <main>
        <RetailComponent/>
        </main>
        <Footer/>
    </div>
  )
}
