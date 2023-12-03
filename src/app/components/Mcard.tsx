import React from 'react'
import Card from './Card'

function Mcard() {
  return (
    <>
    <div className="container mx-auto flex px-5 py-7 md:flex-row flex-col items-center">
        <div className='mx-3'>
            <Card/>
        </div>
        <div className='mx-3'>
            <Card/>
        </div>
        <div className='mx-3'>
            <Card/>
        </div>
        
        
    </div>
    </>
  )
}

export default Mcard