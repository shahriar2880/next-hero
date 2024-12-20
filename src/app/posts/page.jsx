// import { getPosts } from '@/services/postApi'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

export const metadata = {
  title: "Posts",
  description: "Posts Page",
};

const getPosts = async () =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await res.json();
  // console.log(data)
  // return data;
  // if(data){
  //   redirect(`/posts/${data[0].id}`)
  // }
  return data;
}

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
            <button className='bg-red-400 p-2'><Link href={`/posts/${id}`}>See Details</Link></button>
          </div>
        ))
      }
     </div>
    </div>
  )
}

export default page
