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

//Router
import { Routes, Route } from "react-router-dom";

function App() {
  const [foodList, setFoodList] = useState(allFoods);

  function handleDelete(id) {
    const newFoodList = foodList.filter((food) => {
      return food.id !== id;
    });
    setFoodList(newFoodList);
  }

  return (
    <>
      <div id="app">
        <Navbar />

        <div id="main-view">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={<List foodList={foodList} handleDelete={handleDelete} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/:foodId"
              element={<DetailsPage foodList={foodList} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
