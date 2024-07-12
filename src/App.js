import './App.css';
import SignIn from './components/auth/SignIn';
import SignOut from './components/auth/SignOut';
import SignUp from './components/auth/SignUp';
import Homepage from './components/pages/Homepage';
import Navbar from './components/pages/NavBar';
import AdminSignIn from './components/auth/AdminSignIn';
// import Statistics from './components/pages/Statistics';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Hospitals from './components/pages/Hospitals';
import Navbar2 from './components/components2/Navbar2';
import Hero from './components/components2/Hero';
import Health from './components/components2/Health';
import Companion2 from './components/components2/Companion2';
import Footer2 from './components/components2/Footer2';
import Hospices from './components/pages/Hospice';
import NursingHomes from './components/pages/NursingHomes';
import Companions from './components/pages/Companions';
import Pharmacies from './components/pages/Pharmacies';
import VolunteersForm from './components/pages/VolunteersForm';
import VolunteersList from './components/pages/VolunteersList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div>
              <Navbar2 />
              <Hero />
              <Health />
              <Companion2 />
              <Footer2 />
            </div>
          } />
          <Route path="/home" element={
            <div>
              <Navbar />
              <div className="container mx-auto p-4">
                <Homepage />
              </div>
            </div>
          } />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/adminsignin" element={<AdminSignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/statistics" element={<Statistics />} /> */}
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hospices" element={<Hospices/>} />
          <Route path="/nursinghomes" element={<NursingHomes />} />
          <Route path="/companions" element={<Companions />} />
          <Route path="/pharmacies" element={<Pharmacies />} />
          <Route path="/volunteers" element={<VolunteersForm />} />
          <Route path="/volunteer-list" element={<VolunteersList />} />
          <Route path="/chart" element={<Navigate to="/chart.html" />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
