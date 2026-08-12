import React from "react";
import Navbar from "./components/homePage/Navbar";
import Footer from "./components/homePage/Footer";
import Sidebar from "./components/homePage/Sidebar";
import List from "./components/List";

import ListItem from "./components/ListItem";

function App() {
  return (
    <div id="app">
      <Navbar />
      <Sidebar />
      <Footer />
<List/>
    </div>
  );
}

export default App;
