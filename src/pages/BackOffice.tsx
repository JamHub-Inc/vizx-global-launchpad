import React from 'react'
import Navigation from '@/components/Navigation';
import BackOffices from '@/components/BackOfficeSolutions';
import Footer from '@/components/Footer';

export default function BackOffice() {
  return (
    <div>
      <Navigation/>
        <main>
         <BackOffices/>
        </main>
         <Footer />
    </div>
  )
}
