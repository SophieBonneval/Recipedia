import React from 'react';

function Searchbar() {
  return (
    <div>
      <form>
        <label>
          <input 
          type="text" 
          name="name"
          placeholder='Search Recipes' />
          </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Searchbar
