import { Playfair_Display } from 'next/font/google'
import Meal from '@/components/Meal'
import React from 'react'
import styles from './style.module.css'

const playfairDisplay = Playfair_Display({weight :['400','500','600','700','800','900'], subsets: ["latin"]})


export const metadata = {
  title: {
    absolute: "Meals"
  },
  description: "Meals Page",
};

const MealPage = () => {
  
  return (
    <div className={playfairDisplay.className}>
      <h1 className={styles.font_size}>Choose Your Meals</h1>
      <p className={styles.font_tomato}>Choose Your Meal By Searching....</p>
      <Meal/>
    </div>
  )
}

export default MealPage
