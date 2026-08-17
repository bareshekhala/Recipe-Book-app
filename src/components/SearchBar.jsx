import React from 'react'

function SearchBar(props) {
function handleSearch(){
    props.setQuery(event.target.value);
}  
return (
    <div id='search' >

      <input type="text"
      onChange={handleSearch}
      value={props.query}
      placeholder='Search' />
    </div>
  )
}

export default SearchBar
