export const getPosts = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = res.json();
  console.log(data)
  return data;
}

