import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/style/sign-up.scss'
import { Flip, toast } from 'react-toastify';

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

            toast.success('Your Profile Created!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip
                });


        } catch (error) {

            toast.error('Oops! Something Went Wrong!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip
                });

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
                <input required type='text' value={newUsername} onChange={e=>setNewUserName(e.target.value)} placeholder='User Name'/>
                <input required type='email' value={newUserEmail} onChange={e=>setNewEmail(e.target.value)} placeholder='Your Email'/>
                <input required type='password' value={newPassword} onChange={e=>setNewPassword(e.target.value)} placeholder='Your New Password'/>
                <input className='sign-up-btn' type='submit' value={"Sign Up"}/>
            </form>

        </div>
                <Link to={"/login"}>Already A User? Click to Login!</Link>
    </div>
  )
}

export default SignUpPage