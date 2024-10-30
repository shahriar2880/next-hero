import Meal from '@/components/Meal'
import React from 'react'
import styles from './style.module.css'


export const metadata = {
  title: {
    absolute: "Meals"
  },
  description: "Meals Page",
};

const MealPage = () => {
  
  return (
    <div className='p-12'>
      <h1 className={styles.font_size}>Choose Your Meals</h1>
      <p className={styles.font_tomato}>Choose Your Meal By Searching....</p>
      <Meal/>
    </div>
  )
}

export default MealPage
