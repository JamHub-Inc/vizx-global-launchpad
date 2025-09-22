import React from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ComingSoon from '@/components/ComingSoon';
export default function WelfareFund() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
        <main>
         <ComingSoon/>
        </main>
        <Footer/>

    </div>
  )
}
