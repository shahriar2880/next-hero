import Meal from '@/components/Meal'
import React from 'react'

const MealPage = () => {
  return (
    <div className='p-12'>
      <h1 className='text-3xl font-semibold text-red-400'>choose Your Meals</h1>
      <p>Choose Your Meal By Searching....</p>
      <Meal/>
    </div>
  )
}

export default MealPage
