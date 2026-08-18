import ListItem from "../components/ListItem";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

// icons
import plusIcon from "../app-assets/plus-icon.svg";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

function List({ foodList, setFoodList }) {
  //state for search functionality
  const [query, setQuery] = useState("");

  return (
    <div id="dashboard">
      <header id="header-dashboard">
        <h1>Welcome to food paradise! </h1>

        <div>
          {/*search bar*/}
          <SearchBar query={query} setQuery={setQuery} />
        </div>
        
        <Link to="/create" className="btn-create">
          <img src={plusIcon} alt="" />
          New Recipe
        </Link>
      </header>

      <div className="card-grid">
        {foodList
          .filter((food) => {
            return food.name.toLowerCase().includes(query.toLowerCase());
          })
          .map((food) => {
            return (
              <ListItem
                key={food.id}
                id={food.id}
                name={food.name}
                calories={food.calories}
                servings={food.servings}
                image={food.image}
                foodList={foodList}
                setFoodList={setFoodList}
              />
            );
          })}
      </div>
    </div>
  );
}

export default List;
