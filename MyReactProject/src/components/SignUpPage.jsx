import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/style/sign-up.scss'

const SignUpPage = () => {
    const [newUsername, setNewUserName] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newUserEmail, setNewEmail] = useState("");
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {

            await createUser(newUserEmail, newPassword, newUsername);
            navigate("/login");

        } catch (error) {

            alert("Sıgn Up Failed");
            setNewUserName("");
            setNewPassword("");
            setNewEmail("");
        }
    }

  return (
    <div className='sign-up'>

        <div className="form-sign-up">

            <form onSubmit={handleSignUp}>
                <h3>Sign Up</h3>
                <input type='text' value={newUsername} onChange={e=>setNewUserName(e.target.value)} placeholder='UserName'/>
                <input type='password' value={newPassword} onChange={e=>setNewPassword(e.target.value)} placeholder='Password'/>
                <input type='email' value={newUserEmail} onChange={e=>setNewEmail(e.target.value)} placeholder='Email'/>
                <input className='sign-up-btn' type='submit' value={"Sign Up"}/>
                <Link to={"/login"}> If You Are A User Please Click to Login</Link>
            </form>

        </div>
    </div>
  )
}

export default SignUpPage