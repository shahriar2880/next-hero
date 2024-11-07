import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';

const getTime = async() =>{
    const res = await fetch("http://localhost:3000/time",{next:{revalidate: 10}}); //{cache: 'no-store'}
    const data = await res.json()
    return data.currentTime;
  }

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  const currentTime = await getTime();
  return (
    <div>
      <h6>About Page</h6>
      <h3>Time: {currentTime}</h3>
    </div>
  )
}

export default page
