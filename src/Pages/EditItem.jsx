import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
  const [howValue, setHowValue] = useState(foundFood.how);

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

  function handleEditForm(e) {
    e.preventDefault();

    const updatedFood = {
      id: foodId,
      name: nameValue,
      calories: caloriesValue,
      servings: servingValue,
      image: imageValue,
      how: howValue,
    };

    setFoodList((state) => {
      return state.map((food) => {
        return food.id === foodId ? updatedFood : food;
      });
    });
    navigate("/");
  }
  return (
    <div className="edit-wrapper" >
      <>
        <div className="edit-content">

        
        <h2 style={{textAlign:"left"}}>Edit Recipe</h2>
        

         <Form onSubmit={handleEditForm} style={{width:"600px", display:"flex", flexDirection:"column", gap:"16px" }} >
          
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

          <Button variant="primary" type="submit" style={{marginTop:"20px"}}>Save Changes</Button>

          
        </Form>


        {/* <Button variant="secondary" type="button" onClick={() => navigate("/")}>
          Back
        </Button> */}

        </div>
      </>
    </div>

  );
}

export default EditItem;
