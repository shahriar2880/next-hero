export const getMeals = async () =>{
    const res = await fetch('https://dummyjson.com/recipes')
    const data = res.json();
    // console.log(data);
    return data;
  }