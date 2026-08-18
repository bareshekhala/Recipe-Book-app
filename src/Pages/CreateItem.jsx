import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
    <div className="edit-wrapper" >
      <>
        <div id="edit-content">

        <h2 style={{textAlign:"left"}}>Create New Recipe</h2>
        
        <Form onSubmit={handleCreate} style={{width:"600px", display:"flex", flexDirection:"column", gap:"16px" }}>
          <div>
            <Form.Label htmlFor="name">Name: </Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={handleNameChange}
              value={nameValue}
            />
          </div>

          <div>
            <Form.Label htmlFor="calories">Calories: </Form.Label>
            <Form.Control
              type="number"
              name="calories"
              onChange={handleCaloriesChange}
              value={caloriesValue}
            />
          </div>

          <div>
            <Form.Label htmlFor="serving">Serving: </Form.Label>
            <Form.Control
              type="number"
              name="serving"
              onChange={handleServingChange}
              value={servingValue}
            />
          </div>
          <div>
            <Form.Label htmlFor="image">Image URL: </Form.Label>
            <Form.Control
              type="url"
              name="image"
              onChange={handleImageChange}
              value={imageValue}
            />
          </div>
          <div>
            <Form.Label htmlFor="how">Preparation:</Form.Label>
            <Form.Control as="textarea" rows={3} name="how" onChange={handleHowChange} value={howValue} />
          </div>

          <Button variant="primary" type="submit"> Save & Add</Button>

          {errorMessage && <p>{errorMessage}</p>}
        </Form>
        {/* <Button variant="primary" type="button" onClick={() => navigate("/")}>
          Back
        </Button> */}
        </div>
      </>
    </div>
  );
}

export default CreateItem;
