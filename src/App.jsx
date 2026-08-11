import React from "react";
import Navbar from "./components/homePage/Navbar";
import Footer from "./components/homePage/Footer";
import Sidebar from "./components/homePage/Sidebar";
function App() {
  return (
    <div id="app">
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
