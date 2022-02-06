import React from 'react';

const SearchBox = ({searchChange }) => {
  return (
    <div className='pa2 f2 lh-title'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;