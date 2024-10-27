import React from 'react'

const MealPage = () => {
  return (
    <div className='p-12'>
      <h1 className='text-3xl font-semibold text-red-400'>choose Your Meals</h1>
      <p>Choose Your Meal By Searching....</p>
      <div className='mt-12'>
        <input className='p-4 outline-pink-950 border-transparent text-slate-900' type='text' placeholder='search meals...'/>
        <button className='bg-red-400 p-4'>Search</button>
      </div>
    </div>
  )
}

export default MealPage
