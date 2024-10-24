import { getPosts } from '@/services/postApi'
import React from 'react'

const page = async () => {
 const postData = await getPosts();

  return (
    <div>
     <h1>All Posts Here</h1>
     <div className='grid grid-cols-3 gap-2'>
      {
        postData?.slice(0,20).map(({id, title, body}) =>(
          <div key={id} className='border-2 p-3'>
            <h1>Title: {title}</h1>
            <h4>Description: {body}</h4>
          </div>
        ))
      }
     </div>
    </div>
  )
}

export default page
