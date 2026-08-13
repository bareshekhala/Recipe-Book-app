import ListItem from "../components/ListItem";

function List({foodList, handleDelete}) {

  return (
    <div>
      {foodList.map((food) => {
        return (
          <ListItem
            key={food.id}
            id={food.id}
            name={food.name}
            calories={food.calories}
            servings={food.servings}
            image={food.image}
            handleDelete= {handleDelete}
          />
        );
      })}
    </div>
  );
}

export default List;
