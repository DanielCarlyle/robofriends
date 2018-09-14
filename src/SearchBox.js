import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
  return (
   <div className="tc pa2 ba b-green bg-ligthest-blue">
   <input type='search'
    placeholder='search robots'
    onChange={searchChange()}
  />
  </div>
 );
}

export default SearchBox;
