import React, { useEffect, useState } from 'react';
import Navbar from './NavBar';

const Companions = () => {
    const [companions, setCompanions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchCompanions();
    }, []);

    const fetchCompanions = async () => {
        try {
            const response = await fetch('http://localhost:5000/get_companions');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCompanions(data);
        } catch (error) {
            console.error('Failed to fetch companions:', error);
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredCompanions = companions.filter(companion =>
        companion['Elderly_Care_Services Name'].toLowerCase().includes(searchQuery.toLowerCase()) ||
        companion.Locality.toLowerCase().includes(searchQuery.toLowerCase())
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
                {filteredCompanions.map((companion, index) => (
                    <div 
                        key={index}
                        className='flex flex-col border-2 border-yellow-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
                    >
                        <div className='p-4 bg-yellow-100'>
                            <p className='font-semibold text-xl'>{companion['Elderly_Care_Services Name']}</p>
                        </div>
                        <div className='p-4'>
                            <p className='text-gray-600'>{companion.Locality}</p>
                            <p className='text-gray-600'>{companion.Address}</p>
                            <p className='text-gray-600'>{companion.Phone}</p>
                            <a href={companion.Website} target="_blank" rel="noopener noreferrer" className='text-blue-500'>{companion.Website}</a>
                        </div>
                    </div>
                ))}
            </div>
            <Navbar />
        </div>
    );
};

export default Companions;

