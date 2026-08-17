import { useState } from "react";
//data
import allFoods from "./data/recipes.json";

//components
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

//Pages
import List from "./Pages/DashboardPage";
import About from "./Pages/AboutPage";
import DetailsPage from "./Pages/DetailsPage";
import NotFoundPage from "./Pages/NotFoundPage";

import CreateItem from "./Pages/CreateItem";
import EditItem from "./Pages/EditItem";

//Router
import { Routes, Route } from "react-router-dom";

function App() {
  const [foodList, setFoodList] = useState(allFoods);

  return (
    <>
      <div id="app">
        
        

        <div id="main-view">
          <Sidebar />

          <Routes>
            <Route path="/" element={<List  foodList={foodList} setFoodList={setFoodList} />}/>
            <Route path="/about" element={<About />} />
            <Route path="/:foodId" element={<DetailsPage foodList={foodList} />}/>
            <Route path="/create" element={<CreateItem setFoodList={setFoodList} />}/>
            <Route path="/edit/:foodId" element={<EditItem foodList={foodList} setFoodList={setFoodList} />}/>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

        </div>

       
      </div>
    </>
  );
}

export default App;
