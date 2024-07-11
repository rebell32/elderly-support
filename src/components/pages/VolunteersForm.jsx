// import React, { useState } from 'react';
// import Navbar from './NavBar';

// const VolunteerForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const response = await fetch('http://localhost:5000/add_volunteer', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name, email, phone, availability: `${date} ${time}` })
//         });

//         if (response.ok) {
//             alert('Volunteer added successfully');
//             setName('');
//             setEmail('');
//             setPhone('');
//             setDate('');
//             setTime('');
//         } else {
//             alert('Failed to add volunteer');
//         }
//     };

//     return (
//         <>
//             <Navbar/>
//              <div className="flex flex-col items-center min-h-screen">
//             <div
//                 className="fixed inset-0"
//                 style={{
//                     backgroundImage: "url('https://images.unsplash.com/photo-1533444273691-ebf51af8fd9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg')",
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                     zIndex: -1
//                 }}
//             ></div>
//             <div className="bg-yellow-300 p-8 rounded shadow-xl w-full max-w-md">
//                 <form onSubmit={handleSubmit} className="flex flex-col items-center">
//                     <h1 className="text-black mb-4 text-xl font-bold">Sign up as a Volunteer</h1>
//                     <input
//                         type="text"
//                         placeholder="Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className="mb-2 p-2 border border-gray-300 rounded w-full"
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="mb-2 p-2 border border-gray-300 rounded w-full"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Phone"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         className="mb-2 p-2 border border-gray-300 rounded w-full"
//                     />
//                     <div className="w-full mb-2">
//                         <input
//                             type="date"
//                             value={date}
//                             onChange={(e) => setDate(e.target.value)}
//                             className="p-2 border border-gray-300 rounded w-full"
//                         />
//                     </div>
//                     <div className="w-full mb-2">
//                         <input
//                             type="time"
//                             value={time}
//                             onChange={(e) => setTime(e.target.value)}
//                             className="p-2 border border-gray-300 rounded w-full"
//                             step="3600"  // 1 hour intervals
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="text-white bg-gray-900 hover:bg-gray-700 p-2 border border-gray-300 rounded w-full"
//                     >
//                         Add Volunteer
//                     </button>
//                 </form>
//             </div>
//         </div>
//     </>
//     );
// };

// export default VolunteerForm;

import React, { useState } from 'react';
import Navbar from './NavBar';

const VolunteerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/add_volunteer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone, availability: `${date} ${time}` })
        });

        if (response.ok) {
            alert('Volunteer added successfully');
            setName('');
            setEmail('');
            setPhone('');
            setDate('');
            setTime('');
        } else {
            alert('Failed to add volunteer');
        }
    };

    return (
        <>
            <Navbar/>
            <div className="flex justify-center items-center min-h-screen">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1533444273691-ebf51af8fd9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: -1
                    }}
                ></div>
                <div className="bg-yellow-300 p-8 rounded shadow-xl w-full max-w-md z-10">
                    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-2">
                        <h1 className="text-black mb-4 text-xl font-bold">Sign up as a Volunteer</h1>
                        <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mb-2 p-2 border border-gray-300 rounded w-full"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-2 p-2 border border-gray-300 rounded w-full"
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mb-2 p-2 border border-gray-300 rounded w-full"
                    />
                    <div className="w-full mb-2">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="p-2 border border-gray-300 rounded w-full"
                        />
                    </div>
                    <div className="w-full mb-2">
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="p-2 border border-gray-300 rounded w-full"
                            step="3600"  // 1 hour intervals
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-gray-900 hover:bg-gray-700 p-2 border border-gray-300 rounded w-full"
                    >
                        Add Volunteer
                    </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default VolunteerForm;