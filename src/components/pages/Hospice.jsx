import React, { useEffect } from 'react'
import hospiceDetails from '../../lib/hospices'
import checkUserLoggedIn from '../../lib/logintf'
import Navbar from './NavBar'

const HospiceDetails = () => {

    useEffect(() => {
      checkUserLoggedIn();
    }, [])
    

    return (

        <div>
            
            <div style={{ height: '75px' }}></div> {/* Spacer div */}
            <div className='flex flex-col flex-wrap gap-2 justify-center'>
            {
                hospiceDetails.map((hosp, index) => (
                    <a href={`/hospices/${hosp.hospiceId}`} id={index} className='min-h-24 flex justify-between border-2 border-yellow-300 rounded-lg'>
                        <p className='p-8 font-semibold text-xl'>{hosp.hospiceName}</p>
                        <img 
                            src={hosp.imgsrc} 
                            alt={hosp.hospiceName} 
                            className='h-36 rounded' 
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
                        />
                    </a>
                ))
            }
            </div>
            <Navbar />
        </div>
        
    )
}

export default HospiceDetails