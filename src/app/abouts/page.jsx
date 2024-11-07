import React from 'react'

const getTime = async() =>{
    const res = await fetch("http://localhost:3000/time",{next:{revalidate: 10}}); //{cache: 'no-store'}
    const data = await res.json()
    return data.currentTime;
  }

const page = async () => {
  const currentTime = await getTime();
  return (
    <div>
      <h6>About Page</h6>
      <h3>Time: {currentTime}</h3>
    </div>
  )
}

export default page
