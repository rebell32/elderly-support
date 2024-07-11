
import React, { useEffect, useState } from 'react';
import checkUserLoggedIn from '../../lib/logintf';
import Navbar from './NavBar';

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        checkUserLoggedIn();
        const fetchVolunteers = async () => {
            try {
                const response = await fetch('http://localhost:5000/get_volunteers');
                if (response.ok) {
                    const data = await response.json();
                    setVolunteers(data);
                } else {
                    const errorData = await response.json();
                    setError(errorData.error || 'Failed to fetch volunteers');
                }
            } catch (error) {
                setError('Network error: ' + error.message);
            }
        };
        fetchVolunteers();
    }, []);

    return (
        <> 
        <Navbar />
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow p-4 pt-16">
                <div className="bg-yellow-300 p-8 rounded shadow-xl w-full max-w-4xl mx-auto">
                    <h2 className="text-black mb-4 text-2xl font-bold text-center">Volunteer List</h2>
                    {error && <p className="text-red-600 text-center mb-4">{error}</p>}
                    {volunteers.length > 0 ? (
                        <table className="min-w-full bg-white border border-gray-200 rounded">
                            <thead>
                                <tr>
                                    <th className="p-4 border-b border-gray-200">Name</th>
                                    <th className="p-4 border-b border-gray-200">Email</th>
                                    <th className="p-4 border-b border-gray-200">Phone</th>
                                    <th className="p-4 border-b border-gray-200">Availability</th>
                                    <th className="p-4 border-b border-gray-200">Service</th>
                                </tr>
                            </thead>
                            <tbody>
                                {volunteers.map((volunteer) => (
                                    <tr key={volunteer.id} className="hover:bg-gray-100">
                                        <td className="p-4 border-b border-gray-200">{volunteer.name}</td>
                                        <td className="p-4 border-b border-gray-200">{volunteer.email}</td>
                                        <td className="p-4 border-b border-gray-200">{volunteer.phone}</td>
                                        <td className="p-4 border-b border-gray-200">{volunteer.availability}</td>
                                        <td className="p-4 border-b border-gray-200">{volunteer.service}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-center text-gray-600">No volunteers available</p>
                    )}
                </div>
            </main>
        </div>
        </>
    );
};

export default VolunteerList;

