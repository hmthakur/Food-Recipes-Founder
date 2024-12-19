import React from "react";
import { NavLink } from "react-router-dom";

const MenuBar = ({ detail }) => {
  return (
    <div className="meals">
      {!detail
        ? "Data Not Available!"
        : 
      detail.map((curItem) => {
            return (
              <div className="mealImg">
                <img src={curItem.strMealThumb} alt=""/>
                <p>{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}>
                  <button className="btn btn-outline-warning">Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default MenuBar;
