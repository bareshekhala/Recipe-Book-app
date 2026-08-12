import React, { useState } from "react";
import ListItem from "./ListItem";
import allFoods from "../data/recipes.json";

function List() {
  const [foodList, setFoodList] = useState(allFoods);

  function handleDelete(id) {
    const newFoodList = foodList.filter((food) => {
      return food.id !== id;
    });
    setFoodList(newFoodList);
  }

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
