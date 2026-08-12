import React from 'react'
import List from './List'
function ListItem({id,name,calories,image,servings, handleDelete}) {
    
  return (
 <div id='card'>
    <img src={image} alt="foodImage" width={"40px"} />
    <h3>{name}</h3>
    <p>calories: {calories}</p>
    <p>servings: {servings}</p>
      {calories > 400 ? (<p> High in calories</p>) : null}

        <button onClick={() => handleDelete(id)}>Delete</button>

 </div>
  )
}

export default ListItem
 