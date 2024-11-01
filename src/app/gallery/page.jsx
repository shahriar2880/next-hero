import Image from 'next/image'
import React from 'react'

const getTime = async() =>{
  const res = await fetch("http://localhost:3000/time",{next:{revalidate: 10}}); //{cache: 'no-store'}
  const data = await res.json()
  return data.currentTime;
}
const page = () => {

  const currentTime = getTime();
  return (
    <div className='min-h-screen'>
      <h6>Gallery Page</h6>
      <h3 className='text-3xl text-red-600 mt-10'>Time :{currentTime} </h3>
      <div className=' px-12 py-24'>
        {
            [1,2,3,4,5]?.map((img) => (
                <Image key={img} src={`/images/${img}.jpg`} alt="" height="1080" width="1920"/>
            ))
        }
      </div>
    </div>
  )
}

export default page
