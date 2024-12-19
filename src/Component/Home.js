import React, { useState } from "react";
import MenuBar from "./MenuBar";

const Home = () => {
  const [data, setData] = useState();

  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("Search and Get Recipe's");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search === "") {
      setMsg("Please Enter Dish");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await get.json();
      //console.log(get);
      setData(jsonData.meals);
      setMsg("Your Dishes");
    }
  };

  

  return (
    <>
      <h1 className="head"> DOGE FOOD RECIPES </h1>
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search Dish"
            onChange={handleInput}
          />
          <button onClick={myFun} className="btn btn-outline-warning">
            Search
          </button>
        </div>
        <h3 className="msg">{msg}</h3>
        <div>
          <MenuBar detail={data} />
          
        </div>
      </div>
    </>
  );
};

export default Home;
