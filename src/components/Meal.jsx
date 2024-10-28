"use client";
import React, { useEffect, useState } from "react";

const Meal = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [recipes, setRecipes] = useState([]);

  const loadData = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
      const data = await res.json();
      console.log(data)
      setRecipes(data.recipes);
      setError("");
    } catch (error) {
        setError("No Data Found")
    }
  };
  const handler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(()=>{
    loadData();
  },[])

  return (
    <div>
      <div className="mt-12">
        <input
          onChange={handler}
          className="p-4 outline-pink-950 border-transparent text-slate-900"
          type="text"
          placeholder="search recipes..."
        />
        <button onClick={() => loadData()} className="bg-red-400 p-4">
          Search
        </button>
        <div className="mt-12 grid grid-cols-3 gap-12">
          {recipes?.length > 0 && !error &&
            recipes?.map((recipe) => (
              <div key={recipe?.id} className="border-2 p-4">
                {/* <Image src={recipe.image} alt={recipe.userId} width={'100px'} height={'100px'}/> */}  
                <img src={recipe.image} alt={recipe.userId} width={'100%'} height={'100%'} />
                <h1 className="text-3xl text-blue-700 text-center">{recipe.name}</h1>
                <h4 className="">Rating: {recipe.rating}</h4>
                <h4 className="">Total Review: {recipe.reviewCount}</h4>
                <h5 className="">Meal Type: {recipe.mealType}</h5>
                {/* <h5>{recipe.strInstructions}</h5> */}
              </div>
            ))}
            {
                error && <h6>No Data Found</h6>
            }
        </div>
      </div>
    </div>
  );
};

export default Meal;
