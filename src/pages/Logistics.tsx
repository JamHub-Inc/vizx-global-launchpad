import React from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LogisticsComponent from '@/components/LogisticsComponent';
export default function Logistics() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
        <main>
        <LogisticsComponent/>
        </main>
        <Footer/>
    </div>
  )
}
