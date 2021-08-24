import React from 'react'

const SearchBar = (props) => {
    return (
        <div className="search-books-bar">
            <CloseSearchButton />
            <SearchBookInput />

        </div>
    );
}

export default SearchBar;