import ListItem from "../components/ListItem";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


// icons 
import plusIcon from '../app-assets/plus-icon.svg';


function List({ foodList, setFoodList }) {
  return (
    <div id="dashboard">
      <header id="header-dashboard">
        <h1>Welcome to food paradise! </h1>
        <Link to="/create" className="btn-create">
        <img src={plusIcon} alt="" />New Recipe</Link>
      </header>


      <div className="card-grid">
      {foodList.map((food) => {
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
