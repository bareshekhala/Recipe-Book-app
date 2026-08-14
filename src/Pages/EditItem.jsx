import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function EditItem({ foodList, setFoodList }) {
  const navigate = useNavigate();

  const { foodId } = useParams();
  const foundFood = foodList.find((food) => {
    return food.id == foodId;
  });
  const [nameValue, setNameValue] = useState(foundFood.name);
  const [caloriesValue, setCaloriesValue] = useState(foundFood.calories);
  const [servingValue, setServingValue] = useState(foundFood.servings);
  const [imageValue, setImageValue] = useState(foundFood.image);

  //functions

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    setCaloriesValue(event.target.value);
  };
  const handleServingChange = (event) => {
    setServingValue(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageValue(event.target.value);
  };

  function handleEditForm(e) {
    e.preventDefault();

    const updatedFood = {
      id: foodId,
      name: nameValue,
      calories: caloriesValue,
      servings: servingValue,
      image: imageValue,
    };

    setFoodList((state) => {
      return state.map((food) => {
        return food.id === foodId ? updatedFood : food;
      });
    });
    navigate("/");
  }
  return (
    <div>
      <>
        <h2>Edit Recipe</h2>
        <form onSubmit={handleEditForm}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              onChange={handleNameChange}
              value={nameValue}
            />
          </div>

          <div>
            <label htmlFor="calories">Calories: </label>
            <input
              type="number"
              name="calories"
              onChange={handleCaloriesChange}
              value={caloriesValue}
            />
          </div>

          <div>
            <label htmlFor="serving">Serving: </label>
            <input
              type="number"
              name="serving"
              onChange={handleServingChange}
              value={servingValue}
            />
          </div>
          <div>
            <label htmlFor="image">Image URL: </label>
            <input
              type="url"
              name="image"
              onChange={handleImageChange}
              value={imageValue}
            />
          </div>

          <button type="submit">Save</button>
        </form>
        <button type="button" onClick={() => navigate("/")}>
          Back
        </button>
      </>
    </div>
  );
}

export default EditItem;
