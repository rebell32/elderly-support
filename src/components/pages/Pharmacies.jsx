// // import React, { useEffect, useState } from 'react';
// // import Navbar from './NavBar';


// // const Pharmacies = () => {
// //     const [pharmacies, setPharmacies] = useState([]);
// //     const [searchQuery, setSearchQuery] = useState('');

// //     useEffect(() => {
// //         fetchPharmacies();
// //     }, []);

// //     const fetchPharmacies = async () => {
// //         try {
// //             const response = await fetch('http://localhost:5000/get_pharmacies');
// //             if (!response.ok) {
// //                 throw new Error('Network response was not ok');
// //             }
// //             const data = await response.json();
// //             setPharmacies(data);
// //         } catch (error) {
// //             console.error('Failed to fetch pharmacies:', error);
// //         }
// //     };

// //     const handleSearch = (event) => {
// //         setSearchQuery(event.target.value);
// //     };

// //     const filteredPharmacies = pharmacies.filter(pharmacy =>
// //         pharmacy['NAME'].toLowerCase().includes(searchQuery.toLowerCase()) ||
// //         pharmacy.LOCALITY.toLowerCase().includes(searchQuery.toLowerCase())
// //     );

// //     return (
// //         <div>
// //             <div style={{ height: '75px' }}></div> {/* Spacer div */}
// //             <input
// //                 type="text"
// //                 placeholder="Search by name or location"
// //                 value={searchQuery}
// //                 onChange={handleSearch}
// //                 className="p-2 border rounded"
// //             />
// //             <div className='flex flex-col flex-wrap gap-4 justify-center p-4'>
// //                 {filteredPharmacies.map((pharmacy, index) => (
// //                     <div 
// //                         key={index}
// //                         className='flex flex-col border-2 border-yellow-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
// //                     >
// //                         <div className='p-4 bg-yellow-100'>
// //                             <p className='font-semibold text-xl'>{pharmacy['NAME']}</p>
// //                         </div>
// //                         <div className='p-4'>
// //                             <p className='text-gray-600'>{pharmacy.LOCALITY}</p>
// //                             <p className='text-gray-600'>{pharmacy.ADDRESS}</p>
// //                             <p className='text-gray-600'>{pharmacy['PHONE NUM']}</p>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //             <Navbar />
// //         </div>
// //     );
// // };

// // export default Pharmacies;
// import React, { useEffect, useState } from 'react';
// import checkUserLoggedIn from '../../lib/logintf'; // Ensure this path is correct
// import Navbar from './NavBar'; // Ensure this path is correct

// const Pharmacies = () => {
//     const [pharmacyDetails, setPharmacyDetails] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');

//     useEffect(() => {
//         checkUserLoggedIn();
//         fetchPharmacies();
//     }, []);

//     const fetchPharmacies = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/get_pharmacies');
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             console.log('Fetched Data:', data); // Debugging
//             setPharmacyDetails(data);
//         } catch (error) {
//             console.error('Failed to fetch pharmacies:', error);
//         }
//     };

//     const handleSearch = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     const filteredPharmacies = pharmacyDetails.filter(pharmacy => {
//         const pharmacyName = pharmacy['NAME']|| '';
//         const locality = pharmacy.LOCALITY || '';
//         return (
//             pharmacyName.toLowerCase().includes(searchQuery.toLowerCase()) || 
//             locality.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//     });

//     return (
//         <div>
//             <div style={{ height: '75px' }}></div> {/* Spacer div */}
//             <input
//                 type="text"
//                 placeholder="Search by name or location"
//                 value={searchQuery}
//                 onChange={handleSearch}
//                 className="p-2 border rounded mb-4"
//             />
//             <div className='flex flex-col flex-wrap gap-4 justify-center p-4'>
//                 {filteredPharmacies.length > 0 ? (
//                     filteredPharmacies.map((pharmacy, index) => (
//                         <div
//                             key={index}
//                             className='flex flex-col border-2 border-yellow-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
//                         >
//                             <div className='p-4 bg-yellow-100'>
//                                 <p className='font-semibold text-xl'>{pharmacy.NAME}</p>
//                             </div>
//                             <div className='p-4'>
//                                 <p className='text-gray-600'>Locality: {pharmacy.LOCALITY}</p>
//                                 <p className='text-gray-600'>Address: {pharmacy.ADDRESS}</p>
//                                 <p className='text-gray-600'>Phone: {pharmacy['PHONE NUM']}</p>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p className='text-center text-gray-500'>No pharmacies found</p>
//                 )}
//             </div>
//             <Navbar />
//         </div>
//     );
// };

// export default Pharmacies;
import React, { useEffect, useState } from 'react';
import checkUserLoggedIn from '../../lib/logintf'; // Ensure this path is correct
import Navbar from './NavBar'; // Ensure this path is correct

const Pharmacies = () => {
    const [pharmacyDetails, setPharmacyDetails] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        checkUserLoggedIn();
        fetchPharmacies();
    }, []);

    const fetchPharmacies = async () => {
        try {
            const response = await fetch('http://localhost:5000/get_pharmacies');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPharmacyDetails(data);
        } catch (error) {
            console.error('Failed to fetch pharmacies:', error);
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredPharmacies = pharmacyDetails.filter(pharmacy => {
        const pharmacyName = pharmacy['NAME'] || '';
        const locality = pharmacy.LOCALITY || '';
        return (
            pharmacyName.toLowerCase().includes(searchQuery.toLowerCase()) || 
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
                {filteredPharmacies.length > 0 ? (
                    filteredPharmacies.map((pharmacy, index) => (
                        <div
                            key={index}
                            className='flex flex-col border-2 border-yellow-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
                        >
                            <div className='p-4 bg-yellow-100'>
                                <p className='font-semibold text-xl'>{pharmacy.NAME}</p>
                            </div>
                            <div className='p-4'>
                                <p className='text-gray-600'>Locality: {pharmacy.LOCALITY}</p>
                                <p className='text-gray-600'>Address: {pharmacy.ADDRESS}</p>
                                <p className='text-gray-600'>Phone: {pharmacy['PHONE NUM']}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-gray-500'>No pharmacies found</p>
                )}
            </div>
            <Navbar />
        </div>
    );
};

export default Pharmacies;

