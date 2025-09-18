import React from 'react'
import Navigation from '@/components/Navigation'
import RPO from '@/components/RPO'
import Footer from '@/components/Footer'

export default function RecruitmentProcess() {
  return (
    <div className='min-h-screen'>
        <Navigation/>
        <main>
         <RPO/>
        </main>
         <Footer />
    </div>
  )
}
