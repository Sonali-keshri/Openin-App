import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import google from "../assets/google-icon.png"
import { FaApple, FaGoogle } from "react-icons/fa";
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"
import discord from "../assets/discord.svg"
import twitter from "../assets/twitter.svg"
import Form from '../components/Form';
import { auth, provider } from "../config"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {

    const [value, setValue] = useState("");
    const navigate = useNavigate()

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setValue(data.user.email);
                localStorage.setItem("email", data.user.email);
                navigate("/");
            })
            .catch((error) => {
                console.error("Error signing in with Google:", error);
            });
    };

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })


    return (
        <div className='w-full h-full max-w-[1514px] mx-auto bg-slate-200 relative  overflow-hidden'  >
            <div className='bg-blue-700 md:text-white text-blue-800 w-3/4 h-full p-4 -skew-x-12 absolute -left-96 md:flex hidden ' />
            <div className='flex md:flex-row flex-col  '>
                <div className='md:w-2/5 w-full md:h-screen h-20 z-50 md:bg-transparent  bg-blue-400'>
                    <nav className='p-5 md:block flex items-center gap-4'>
                        <img src={logo} className='w-10' /> <span className='font-bold text-4xl'>BASE</span>
                    </nav>
                    <div className='mt-24 flex flex-col justify-center items-center gap-80'>
                        <div className=' text-white font-bold flex-col justify-center items-center text-7xl '>
                            <h1 className='text-center md:text-white text-blue-800 md:block hidden' >BASE</h1>
                        </div>
                        <ul className='w-[299px] md:flex hidden justify-between items-center  '>
                            <li ><img src={github} className='w-10' /></li>
                            <li ><img src={twitter} className='w-10' /></li>
                            <li ><img src={linkedin} className='w-10' /></li>
                            <li ><img src={discord} className='w-10' /></li>
                        </ul>
                    </div>
                </div>

                <div className='md:w-3/5 w-full h-screen flex md:justify-center md:items-center md:pt-0 pt-[100px] md:p-0 p-10 '>
                    <div className=''>
                        <div>
                            <h1 className='text-4xl font-bold pb-5'>Sign In</h1>
                            <p className='text-xl'>Sign in to your account</p>
                        </div>
                        <div className='flex justify-between gap-4 text-black my-6'>
                            <button className='bg-white rounded-lg  flex items-center md:gap-2 p-1 md:py-0 py-3 px-2 cursor-pointer' onClick={handleClick}><img src={google} /> Sign in with Google</button>
                            <button className='bg-white rounded-lg flex items-center md:gap-2 p-1 md:py-0 py-3 px-2 '><FaApple /> Sign in with Apple</button>
                        </div>
                        <Form />
                        <p className='text-center mt-5  md:block flex flex-col gap-4'>Don’t have an account? <a href="/signup" className='text-blue-600'>Register here</a></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPage