import React, { useEffect, useState } from 'react';
import checkUserLoggedIn from '../../lib/logintf';
import Navbar from './NavBar';

const Hospitals = () => {
    const [hospDetails, setHospDetails] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        checkUserLoggedIn();
        fetchHospitals();
    }, []);

    const fetchHospitals = async () => {
        try {
            const response = await fetch('http://localhost:5000/get_hospitals');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setHospDetails(data);
        } catch (error) {
            console.error('Failed to fetch hospitals:', error);
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredHospitals = hospDetails.filter(hosp =>
        hosp['Hospital Name'].toLowerCase().includes(searchQuery.toLowerCase()) ||
        hosp.Locality.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div style={{ height: '75px' }}></div> {/* Spacer div */}
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Search by name or location"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="p-2 border rounded-l mb-0 flex-grow"
                />
                <div className="p-2 bg-gray-200 border rounded-r cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-gray-600"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
            </div>
            <div className='flex flex-col flex-wrap gap-4 justify-center p-4'>
                {filteredHospitals.map((hosp, index) => (
                    <div
                        key={index}
                        className='flex flex-col border-2 border-yellow-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
                    >
                        <div className='bg-yellow-100 p-4'>
                            <p className='font-semibold text-xl'>{hosp['Hospital Name']}</p>
                        </div>
                        <div className='p-4'>
                            <p className='text-gray-600'>Locality: {hosp.Locality}</p>
                            <p className='text-gray-600'>Address: {hosp.Address}</p>
                            <p className='text-gray-600'>Phone: {hosp['Phone Number']}</p>
                            <p className='text-gray-600'>Website: <a href={hosp['Website URL']} className='text-blue-600'>{hosp['Website URL']}</a></p>
                            <p className='text-gray-600'>Description: {hosp.Description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Navbar />
        </div>
    );
};

export default Hospitals;

