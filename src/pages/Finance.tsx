import React from 'react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FinanceComponent from '@/components/FinanceComponent';

export default function Finance() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
        <main>
         <FinanceComponent/> 
        </main>
       <Footer/>

    </div>
  )
}
