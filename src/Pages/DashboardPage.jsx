import ListItem from "../components/ListItem";
import { Link } from "react-router-dom";
function List({ foodList, handleDelete }) {
  return (
    <div>
      {foodList.map((food) => {
        return (
          <>
            <ListItem
              key={food.id}
              id={food.id}
              name={food.name}
              calories={food.calories}
              servings={food.servings}
              image={food.image}
              handleDelete={handleDelete}
            />
          </>
        );
      })}
      <Link to="/create">Create</Link>
    </div>
  );
}

export default List;
