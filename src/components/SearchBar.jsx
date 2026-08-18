import React from 'react'

import Form from 'react-bootstrap/Form';

function SearchBar(props) {
function handleSearch(){
    props.setQuery(event.target.value);
}  
return (
    <div id='search' >

      <Form.Control type="search"
      onChange={handleSearch}
      value={props.query}
      placeholder='Search recipes...' />
    </div>
  )
}

export default SearchBar
