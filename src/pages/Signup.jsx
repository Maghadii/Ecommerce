import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignupImg from '../images/signup-image.png';
import { useAuth } from '../components/AuthContext';

const Signup = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        login();
        navigate('/');
    };

    return (
        <>
            <section className="signup-sec">
                <div className="container">
                    <div className="signup-main">
                        <div className="row">
                            <div className="col-7">
                                <img src={SignupImg} alt="" />
                            </div>
                            <div className="col-5">
                                <div className="signup-form">
                                    <h2>Create an account</h2>
                                    <p>Enter your details below</p>
                                    <form onSubmit={handleSignup}>
                                        <input type="text" placeholder='Name' />
                                        <input type="email" placeholder='Email or Phone Number' />
                                        <input type="password" placeholder='Password' />
                                        <div className="form-btn">
                                            <button className='w-100'>Create Account</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;
