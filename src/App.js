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
import Navbar2 from './components/components2/Navbar2';
import Hero from './components/components2/Hero';
import Health from './components/components2/Health';
import Companion2 from './components/components2/Companion2';
import Footer2 from './components/components2/Footer2';


// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <div>
//       < Navbar2 />
//       < Hero /> 
//       < Health />
//       < Companion2 />
//       < Footer2 />
//       </div>
//       <Navbar />
//       <div className="container mx-auto p-4">
//       <Routes>
//              <Route path="/" element={<Homepage />} />
//              <Route path="/signin" element={<SignIn />} />
//              <Route path="/signout" element={<SignOut/>}/>
//              <Route path="/adminsignin" element={<AdminSignIn />} />
//              <Route path="/signup" element={<SignUp />} />
//              <Route path="/admindashboard" element={<AdminDashboard/>} /> 
//              <Route path="/hospitaldetails" element={<Hospitals />} />     
//              <Route path={`/hospital/:id`} element={<HospitalDetails />} />     
//              </Routes>
//     </div>
//     </div>
//     </Router>
//   );
// }

// export default App;
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
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hospital/:id" element={<HospitalDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
