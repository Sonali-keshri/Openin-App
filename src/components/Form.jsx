import React, { useEffect, useState } from 'react'

const Form = () => {
    

    const [inpVal , setInpVal]= useState({
        email:"",
        password:""
    })
   

    const handleChange =(e)=>{
        setInpVal((prev)=> (
            {...prev, [e.target.name]:e.target.value}
        ))
    }
    useEffect(()=>{
        console.log(inpVal)
    })
    return (
        <div>

            <form className='bg-white w-full h-full p-6 rounded-2xl '>
                <div className='mb-4'>
                    <label htmlFor="email">Email Address</label>
                    <div className='mt-2 bg-gray-300 rounded-lg'>
                        <input type="email" placeholder='Enter your email' value={inpVal.email} name="email" onChange={handleChange} className='w-full bg-transparent px-4 py-1 text-black' />
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor="password">Password</label>
                    <div className='mt-2 bg-slate-400 rounded-lg'>
                        <input type='password' placeholder='Enter your password' value={inpVal.password} name="password" onChange={handleChange} className='w-full bg-transparent px-4 py-1 text-black' />
                        
                    </div>
                </div>
                <p className='text-sm text-blue-500'>Forget Password</p>
                <button className='w-full bg-blue-600 rounded-lg p-2 text-xl font-bold text-white mt-3'>Sign In</button>
            </form>
        </div>
    )
}

export default Form