import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


//icons
import TrashIcon from "../app-assets/trash-icon.svg"
import EditIcon from "../app-assets/edit-icon.svg"

//bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ListItem({
  id,
  name,
  calories,
  image,
  servings,
  foodList,
  setFoodList,
}) {
  // For "Are you sure functionality" a new state is defined
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function handleDelete() {
    const newFoodList = foodList.filter((food) => {
      return food.id !== id;
    });
    setFoodList(newFoodList);
    setShowModal(false);
  }

  return (
    <div id="card">
      <Link to={`/${id}`} className="card-link">
        
          <div id="img-wrapper" style={{ backgroundImage: `url(${image})` }}>
            {/* <img id="img-card" src={image} alt="foodImage" /> */}
            {calories > 400 ? (
              <p className="badge high-calories">High in calories</p>
            ) : (
              <p className="badge healthy">Low in calories</p>
            )}
          </div>

          <div id="card-info">
            <h3>{name}</h3>
            <p>Calories: {calories}</p>
            {/* <p>Servings: {servings}</p> */}
          </div>
      </Link>

      <div id="card-btn-wrapper">
              {/* Delete Button */}
              <button
                type="button"
                onClick={handleShow}
                  // setShowModal(true);
                
              >
                <img src={TrashIcon} alt="" />
                Delete
              </button>

              {/* Edit Link (Styled as a button directly) */}
              <Link
                to={`/edit/${id}`}
                className="btn-edit"
                onClick={(e) => e.stopPropagation()} // Prevents parent card link from opening
              >
                <img src={EditIcon} alt="" />
                Edit
              </Link>
            </div>


          {/*Are you sure part*/}
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure that you want to delete?</Modal.Title>
        </Modal.Header>
        <Modal.Body> This action is permanent!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>



            
            
           
        
    </div>
  );
}

export default ListItem;
