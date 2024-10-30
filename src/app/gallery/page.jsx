import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
      <h6>Gallery Page</h6>
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
