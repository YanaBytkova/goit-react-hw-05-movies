import React from 'react';

export const SearchForm = ({ onSubmit }) => {

    return (
        
        <form onSubmit={onSubmit}>
            <label>
                <input type="text" name="searchKey" required placeholder="Enter movie" />
            </label>
            <button type="submit">Search</button>
      </form> 
    );
 

}
