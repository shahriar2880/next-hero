'use client'
import React from 'react'

const page = () => {
    const handelRegister = async (event) => {
        event.preventDefault();
    };
  return (
    <div className='flex items-center justify-center mt-24'>
      <div>
        <h6 className='text-lg font-semibold'>
            Sign Up With Email And Password
        </h6>
        <div>
            <form onSubmit={handelRegister} action=''>
                <label htmlFor='email'> Name </label><br/>
                <input
                type='text'
                name='name'
                placeholder='your name'
                className='outline-none border-transparent p-3 text-slate-700'
                /> <br/><br/>
                <label htmlFor='email'> Email </label><br/>
                <input
                type='text'
                name='email'
                placeholder='your email'
                className='outline-none border-transparent p-3 text-slate-700'
                /> <br/><br/>
                <label htmlFor='password'> Password </label><br/>
                <input
                type='password'
                name='password'
                placeholder='your password'
                className='outline-none border-transparent p-3 text-slate-700'
                /> <br/><br/>
                <button className='bg-orange-500 p-3'>Register</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default page
