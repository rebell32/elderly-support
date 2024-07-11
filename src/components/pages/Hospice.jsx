// // import React, { useEffect, useState } from 'react';
// // import checkUserLoggedIn from '../../lib/logintf';
// // import Navbar from './NavBar';

// // const Hospices = () => {
// //     const [hospiceDetails, setHospiceDetails] = useState([]);
// //     const [searchQuery, setSearchQuery] = useState('');

// //     useEffect(() => {
// //         checkUserLoggedIn();
// //         fetchHospices();
// //     }, []);

// //     const fetchHospices = async () => {
// //         try {
// //             const response = await fetch('http://localhost:5000/get_hospices');
// //             if (!response.ok) {
// //                 throw new Error('Network response was not ok');
// //             }
// //             const data = await response.json();
// //             console.log('Fetched Data:', data); // Check data structure here
// //             setHospiceDetails(data);
// //         } catch (error) {
// //             console.error('Failed to fetch hospices:', error);
// //         }
// //     };

// //     const handleSearch = (event) => {
// //         setSearchQuery(event.target.value);
// //     };

// //     const filteredHospices = hospiceDetails.filter(hosp => {
// //         const hospiceName = hosp['Hospice Care Centre Name'] || '';
// //         const locality = hosp.Locality || '';
// //         return (
// //             hospiceName.toLowerCase().includes(searchQuery.toLowerCase()) || 
// //             locality.toLowerCase().includes(searchQuery.toLowerCase())
// //         );
// //     });

// //     return (
// //         <div>
// //             <div style={{ height: '75px' }}></div> {/* Spacer div */}
// //             <input
// //                 type="text"
// //                 placeholder="Search by name or location"
// //                 value={searchQuery}
// //                 onChange={handleSearch}
// //                 className="p-2 border rounded mb-4"
// //             />
// //             <div className='flex flex-col flex-wrap gap-4 justify-center p-4'>
// //                 {filteredHospices.length > 0 ? (
// //                     filteredHospices.map((hosp, index) => (
// //                         <div
// //                             key={index}
// //                             className='flex flex-col border-2 border-yellow-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
// //                         >
// //                             <div className='p-4 bg-yellow-100'>
// //                                 <p className='font-semibold text-xl'>{hosp['Hospice Care Centre Name']}</p>
// //                             </div>
// //                             <div className='p-4'>
// //                                 <p className='text-gray-600'>Locality: {hosp.Locality}</p>
// //                                 <p className='text-gray-600'>Address: {hosp.Address}</p>
// //                                 <p className='text-gray-600'>Phone: {hosp.Phone}</p>
// //                                 <p className='text-gray-600'>Website: <a href={hosp.Website} className='text-blue-600' target="_blank" rel="noopener noreferrer">{hosp.Website}</a></p>
// //                                 <p className='text-gray-600'>Description: {hosp.Description}</p>
// //                             </div>
// //                         </div>
// //                     ))
// //                 ) : (
// //                     <p className='text-center text-gray-500'>No hospices found</p>
// //                 )}
// //             </div>
// //             <Navbar />
// //         </div>
// //     );
// // };

// // export default Hospices;
// import React, { useEffect, useState } from 'react';
// import checkUserLoggedIn from '../../lib/logintf';
// import Navbar from './NavBar';

// const Hospices = () => {
//     const [hospiceDetails, setHospiceDetails] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');

//     useEffect(() => {
//         checkUserLoggedIn();
//         fetchHospices();
//     }, []);

//     const fetchHospices = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/get_hospices');
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             console.log('Fetched Data:', data); // Check data structure here
//             setHospiceDetails(data);
//         } catch (error) {
//             console.error('Failed to fetch hospices:', error);
//         }
//     };

//     const handleSearch = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     const filteredHospices = hospiceDetails.filter(hosp => {
//         const hospiceName = hosp['Hospice Care Centre Name'] || '';
//         const locality = hosp.Locality || '';
//         return (
//             hospiceName.toLowerCase().includes(searchQuery.toLowerCase()) || 
//             locality.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//     });

//     return (
//         <div>
//             <div style={{ height: '75px' }}></div> {/* Spacer div */}
//             <div className="flex items-center mb-4">
//                 <input
//                     type="text"
//                     placeholder="Search by name or location"
//                     value={searchQuery}
//                     onChange={handleSearch}
//                     className="p-2 border rounded-l mb-0 flex-grow"
//                 />
//                 <div className="p-2 bg-gray-200 border rounded-r cursor-pointer">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6 text-gray-600"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M21 21l-4.35-4.35m-1.65-2.65A7.5 7.5 0 1116.5 9.5 7.5 7.5 0 0115 15.5zm-2.5-6.5a5 5 0 105 5 5 5 0 00-5-5z"
//                         />
//                     </svg>
//                 </div>
//             </div>
//             <div className='flex flex-col flex-wrap gap-4 justify-center p-4'>
//                 {filteredHospices.length > 0 ? (
//                     filteredHospices.map((hosp, index) => (
//                         <div
//                             key={index}
//                             className='flex flex-col border-2 border-yellow-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
//                         >
//                             <div className='p-4 bg-yellow-100'>
//                                 <p className='font-semibold text-xl'>{hosp['Hospice Care Centre Name']}</p>
//                             </div>
//                             <div className='p-4'>
//                                 <p className='text-gray-600'>Locality: {hosp.Locality}</p>
//                                 <p className='text-gray-600'>Address: {hosp.Address}</p>
//                                 <p className='text-gray-600'>Phone: {hosp.Phone}</p>
//                                 <p className='text-gray-600'>Website: <a href={hosp.Website} className='text-blue-600' target="_blank" rel="noopener noreferrer">{hosp.Website}</a></p>
//                                 <p className='text-gray-600'>Description: {hosp.Description}</p>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p className='text-center text-gray-500'>No hospices found</p>
//                 )}
//             </div>
//             <Navbar />
//         </div>
//     );
// };

// export default Hospices;
import React, { useEffect, useState } from 'react';
import checkUserLoggedIn from '../../lib/logintf';
import Navbar from './NavBar';

const Hospices = () => {
    const [hospiceDetails, setHospiceDetails] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        checkUserLoggedIn();
        fetchHospices();
    }, []);

    const fetchHospices = async () => {
        try {
            const response = await fetch('http://localhost:5000/get_hospices');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Fetched Data:', data); // Check data structure here
            setHospiceDetails(data);
        } catch (error) {
            console.error('Failed to fetch hospices:', error);
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredHospices = hospiceDetails.filter(hosp => {
        const hospiceName = hosp['Hospice Care Centre Name'] || '';
        const locality = hosp.Locality || '';
        return (
            hospiceName.toLowerCase().includes(searchQuery.toLowerCase()) || 
            locality.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

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
                {filteredHospices.length > 0 ? (
                    filteredHospices.map((hosp, index) => (
                        <div
                            key={index}
                            className='flex flex-col border-2 border-yellow-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
                        >
                            <div className='p-4 bg-yellow-100'>
                                <p className='font-semibold text-xl'>{hosp['Hospice Care Centre Name']}</p>
                            </div>
                            <div className='p-4'>
                                <p className='text-gray-600'>Locality: {hosp.Locality}</p>
                                <p className='text-gray-600'>Address: {hosp.Address}</p>
                                <p className='text-gray-600'>Phone: {hosp.Phone}</p>
                                <p className='text-gray-600'>Website: <a href={hosp.Website} className='text-blue-600' target="_blank" rel="noopener noreferrer">{hosp.Website}</a></p>
                                <p className='text-gray-600'>Description: {hosp.Description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-gray-500'>No hospices found</p>
                )}
            </div>
            <Navbar />
        </div>
    );
};

export default Hospices;
