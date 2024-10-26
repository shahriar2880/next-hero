import React from 'react'

    const getDetailsPosts = async (id) =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = res.json()
        return data;
    }

const page = async ({params}) => {
    const {title, body} = await getDetailsPosts(params.id)

  return (
    <div className='h-screen p-10 border-2'>
      <h1>Title: {title}</h1>
      <h4>Desc: {body}</h4>
    </div>
  )
}

export default page
