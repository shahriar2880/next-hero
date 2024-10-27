"use client";
import React, { useEffect, useState } from "react";

const Meal = () => {
  const [search, setSearch] = useState("apple");
  const [error, setError] = useState("");
  const [meals, setMeal] = useState([]);

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();
      setMeal(data.meals);
      setError("");
    } catch (error) {
        setError("No Data Found")
    }
  };
  const handler = (e) => {
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
          placeholder="search meals..."
        />
        <button onClick={() => loadData()} className="bg-red-400 p-4">
          Search
        </button>
        <div className="mt-12 grid grid-cols-3 gap-12">
          {meals?.length > 0 && !error && meals?.map((meal) => (
              <div key={meal?.idMeal} className="border-2 p-4">
                <Image src={meal?.strMealThumb} alt={meal?.strMeal} />
                <h1>{meal.strMeal}</h1>
                <h5>{meal.strInstructions}</h5>
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
