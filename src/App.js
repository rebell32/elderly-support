import './App.css';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import SignUp from './components/auth/SignUp';
import Homepage from './components/pages/Homepage';
import Navbar from './components/pages/NavBar';
import AdminSignIn from './components/auth/AdminSignIn';
import AdminDashboard from './components/pages/AdminDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hospitals from './components/pages/Hospitals';
import HospitalDetails from './components/pages/HospitalDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="container mx-auto p-4">
      <Routes>
             <Route path="/" element={<Homepage />} />
             <Route path="/signin" element={<SignIn />} />
             <Route path="/signout" element={<SignOut/>}/>
             <Route path="/adminsignin" element={<AdminSignIn />} />
             <Route path="/signup" element={<SignUp />} />
             <Route path="/admindashboard" element={<AdminDashboard/>} /> 
             <Route path="/hospitaldetails" element={<Hospitals />} />     
             <Route path={`/hospital/:id`} element={<HospitalDetails />} />     
             </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;


