import React, { useEffect } from 'react'
import hospDetails from '../../lib/hospital'
import checkUserLoggedIn from '../../lib/logintf'
import Navbar from './NavBar'

const HospDetails = () => {

    useEffect(() => {
      checkUserLoggedIn();
    }, [])
    

    return (

        <div>
            
            <div style={{ height: '75px' }}></div> {/* Spacer div */}
            <div className='flex flex-col flex-wrap gap-2 justify-center'>
            {
                hospDetails.map((hosp, index) => (
                    <a href={`/hospital/${hosp.hospId}`} id={index} className='min-h-24 flex justify-between border-2 border-yellow-300 rounded-lg'>
                        <p className='p-8 font-semibold text-xl'>{hosp.hospName}</p>
                        <img 
                            src={hosp.imgsrc} 
                            alt={hosp.hospName} 
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

export default HospDetails