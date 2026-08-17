import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateItem(props) {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState("");
  const [caloriesValue, setCaloriesValue] = useState(0);
  const [servingValue, setServingValue] = useState(null);
  const [imageValue, setImageValue] = useState("");
  const [howValue, setHowValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

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
  const handleHowChange = (event) => {
    setHowValue(event.target.value);
  };

  function handleCreate(e) {
    e.preventDefault();

    if (
      !nameValue ||
      !caloriesValue ||
      !servingValue ||
      !imageValue ||
      !howValue
    ) {
      setErrorMessage("You should fill out everything");
      return;
    }
    // new Obj
    const newFood = {
      id: crypto.randomUUID(),
      name: nameValue,
      calories: caloriesValue,
      servings: servingValue,
      image: imageValue,
      how: howValue,
    };

    props.setFoodList((state) => {
      return [...state, newFood];
    });

    navigate("/");
  }
  return (
    <div>
      <>
        <h2>Create New Recipe</h2>
        <hr />
        <form onSubmit={handleCreate}>
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
          <div>
            <label htmlFor="how">Preparation:</label>
            <textarea name="how" onChange={handleHowChange} value={howValue} />
          </div>

          <button type="submit">Add</button>

          {errorMessage && <p>{errorMessage}</p>}
        </form>
        <button type="button" onClick={() => navigate("/")}>
          Back
        </button>
      </>
    </div>
  );
}

export default CreateItem;
