import ListItem from "../components/ListItem";
import { Link } from "react-router-dom";
function List({ foodList, setFoodList }) {
  return (
    <div id="dashboard">
      <header id="header-dashboard">
        <h1>Welcome to food paradise! </h1>
        <Link to="/create">Create</Link>
      </header>

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
  );
}

export default List;
