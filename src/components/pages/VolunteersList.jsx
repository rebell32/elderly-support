// import React, { useEffect, useState } from 'react';

// const VolunteerList = () => {
//     const [volunteers, setVolunteers] = useState([]);

//     useEffect(() => {
//         const fetchVolunteers = async () => {
//             const response = await fetch('http://localhost:5000/get_volunteers');
//             if (response.ok) {
//                 const data = await response.json();
//                 setVolunteers(data);
//             } else {
//                 console.error('Failed to fetch volunteers');
//             }
//         };
//         fetchVolunteers();
//     }, []);

//     return (
//         <div>
//             <h2>Volunteer List</h2>
//             <ul>
//                 {volunteers.map(volunteer => (
//                     <li key={volunteer.id}>
//                         {volunteer.name} - {volunteer.email} - {volunteer.phone} - {volunteer.availability}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default VolunteerList;
import React, { useEffect, useState } from 'react';

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        const fetchVolunteers = async () => {
            const response = await fetch('http://localhost:5000/get_volunteers');
            if (response.ok) {
                const data = await response.json();
                setVolunteers(data);
            } else {
                console.error('Failed to fetch volunteers');
            }
        };
        fetchVolunteers();
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            <div className="bg-yellow-300 p-8 rounded shadow-xl w-full max-w-4xl">
                <h2 className="text-black mb-4 text-2xl font-bold text-center">Volunteer List</h2>
                {volunteers.length > 0 ? (
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="p-4 text-left">Name</th>
                                <th className="p-4 text-left">Email</th>
                                <th className="p-4 text-left">Phone</th>
                                <th className="p-4 text-left">Availability</th>
                            </tr>
                        </thead>
                        <tbody>
                            {volunteers.map((volunteer) => (
                                <tr key={volunteer.id} className="hover:bg-gray-100">
                                    <td className="p-4 border-b border-gray-200">{volunteer.name}</td>
                                    <td className="p-4 border-b border-gray-200">{volunteer.email}</td>
                                    <td className="p-4 border-b border-gray-200">{volunteer.phone}</td>
                                    <td className="p-4 border-b border-gray-200">{volunteer.availability}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-600">No volunteers available</p>
                )}
            </div>
        </div>
    );
};

export default VolunteerList;
