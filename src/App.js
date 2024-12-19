import FoodInfo from "./Component/FoodInfo";
import Home from "./Component/Home";
import {Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:mealid" element={<FoodInfo/>}/>
        </Routes>
      
      
    </>
  );
}

export default App;
