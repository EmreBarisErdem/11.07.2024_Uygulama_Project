import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import AuthContext from '../context/AuthContext';
import axios from 'axios';



const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");

  const handleLogin = () => {
    navigate("/login");
  }
  const handleLogout = () => {
    navigate("/login");
  }

  const getCurrentUser = async () => {
    const url = "https://api.escuelajs.co/api/v1/auth/profile";

    const response = await axios.get(url, {
      headers: {
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken")).access_token}`
      }
    })
    const user = await response.data;
    // console.log(user);
    setCurrentUser(user);
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userToken"))) {
      getCurrentUser();
    }
  }, [])


  return (
    <nav>
      <div className='navbar'>
        {!isAuthenticated &&
          <img src="https://w7.pngwing.com/pngs/749/84/png-transparent-chef-cooking-chef-hat-white-hand-cook-thumbnail.png" alt="logo.png" />
        }
        <div className="kullanici">
          {isAuthenticated &&

            <div className="user-card">
              <img src={currentUser.avatar} alt="" />
              <div className="user-text">
                <span>{currentUser.name} / {currentUser.role}</span>
              </div>
            </div>
          }

          <button id='loginBtn' onClick={isAuthenticated ? handleLogout : handleLogin}>{isAuthenticated ? "Çıkış Yap" : "Giriş Yap"}</button>
        </div>

        <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
            {
              isAuthenticated &&
              <Link to="add-recipe">Add Recipe</Link>
            }
          </li>
          <li>
            {
              isAuthenticated &&
              <Link to="card-list">All Recipes</Link>
            }
          </li>


        </ul>

      </div>
    </nav>
  )
}

export default Header