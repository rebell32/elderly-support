import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import checkUserLoggedIn from '../../lib/logintf';
import SignOut from '../auth/SignOut';

export const Homepage = () => {

  // const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
  // const navigate = useNavigate();

  useEffect(()=>{
    checkUserLoggedIn();
  })

  return (
    <>
    <div>
      <div className='flex flex-col text-5x1 font-semibold mb-1'>Homepage</div>
      <div className='flex'>
        <li className='relative group'>
          <Link to={"/hospitaldetails"} className={"text-blue-500"}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Click to view list of hospitals</button>
          </Link>
        </li>
      </div>
      <SignOut />
    </div>
    </>
  )
}

export default Homepage;