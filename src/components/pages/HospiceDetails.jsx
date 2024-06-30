import React, { useEffect, useState } from 'react'
import hospiceDetails from '../../lib/hospices';
import { useParams } from 'react-router-dom'
import checkUserLoggedIn from '../../lib/logintf'
import SignOut from '../auth/SignOut';


const HospiceDetails = () => {

    const params = useParams()
    const [hospice, setHospital] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        checkUserLoggedIn();
    },[])

    useEffect(() => {
        const paramId = params?.id;
        console.log(paramId);
        console.log(hospiceDetails);
        setHospital(hospiceDetails.find(hosp => hosp.hospiceId = parseInt(paramId)))
        setLoading(false)
        console.log(hospiceDetails)
    }, [params])


    return (
        <div>
            <SignOut/>
            {
                !loading &&
                <>
                    <h1>{hospice.hospiceName}</h1>
                    
                    <img src={hospice.imgsrc} alt={hospice.hospiceName} />

                </>
            }
            
        </div>
    )
}

export default HospiceDetails;