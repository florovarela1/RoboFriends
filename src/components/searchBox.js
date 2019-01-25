import React from 'react';

const SearchBox = ({ searchField, searchChange}) => {
    return (
        <div className='pa3'>
            <input 
                className='pa3 ba b--green bg-lightest-blue tc'
                type='search'
                placeholder='Search'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;