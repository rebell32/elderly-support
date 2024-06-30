import React, { useEffect, useState } from 'react'
import hospDetails from '../../lib/hospital'
import { useParams } from 'react-router-dom'
import checkUserLoggedIn from '../../lib/logintf'
import SignOut from '../auth/SignOut';


const HospitalDetails = () => {

    const params = useParams()
    const [hospital, setHospital] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        checkUserLoggedIn();
    },[])

    // useEffect(() => {
    //     const paramId = params?.id;
    //     console.log(paramId);
    //     console.log(hospDetails);
    //     setHospital(hospDetails.find(hosp => hosp.hospId = parseInt(paramId)))
    //     setLoading(false)
    //     console.log(hospital)
    // }, [params])

    useEffect(() => {
        const paramId = params?.id;
        const selectedHospital = hospDetails.find(hosp => hosp.hospId === parseInt(paramId))
        setHospital(selectedHospital)
        setLoading(false)
    }, [params])


    return (
        <div>
            <SignOut/>
            {
                !loading &&
                <>
                    <h1>{hospital.hospName}</h1>
                    
                    <img src={hospital.imgsrc} alt={hospital.hospName} />

                </>
            }
            
        </div>
    )
}

export default HospitalDetails;