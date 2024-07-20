import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/style/login.scss'

const LoginPage = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await login(username,password);
            navigate("/");
        } catch (error) {
            alert("Login Failed!");
            setUsername("");
            setPassword("");
        }
    }

  return (

    <div className='login-page'>

        <div className="form-login">
            <h3>Please Sign In</h3>

            <form onSubmit={handleLogin}>
                
                <input value={username} onChange={e=>setUsername(e.target.value)} type="text" placeholder='UserName' />
                <input value={password} onChange={e=>setPassword(e.target.value)} type="text" placeholder='Password' />
                <input className='login-btn' type="submit" value={"Login"} />

            </form>

        </div>

        <Link className='visitor-login' to={"/"}>To Enter as Visitor</Link>
        <Link  className='visitor-login' to={"/signup"}>To Sign Up</Link>
    </div>
  )
}

export default LoginPage