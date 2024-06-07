import React, { useEffect } from 'react'
import hospDetails from '../../lib/hospital'
import checkUserLoggedIn from '../../lib/logintf'

const HospDetails = () => {

    useEffect(() => {
      checkUserLoggedIn();
    }, [])
    

    return (
        <div>
            <div className='flex flex-col flex-wrap gap-2 justify-center'>
            {
                hospDetails.map((hosp, index) => (
                    <a href={`/hospital/${hosp.hospId}`} id={index} className='min-h-24 flex justify-between border-2 border-blue-500 rounded-lg'>
                        <p className='p-8 font-semibold text-xl'>{hosp.hospName}</p>
                        <img src={hosp.imgsrc} alt={hosp.hospName} className='h-36 rounded' />
                    </a>
                ))
            }
            </div>
        </div>
    )
}

export default HospDetails