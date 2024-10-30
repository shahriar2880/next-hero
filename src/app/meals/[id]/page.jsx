import React from 'react'


const getDetailsPosts = async (id) =>{
    const res = await fetch(`https://dummyjson.com/recipes?=${id}`)
    const data = res.json()
    return data;
}
const page = async ({params}) => {
    const {name} = await getDetailsPosts(params.id)
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default page
