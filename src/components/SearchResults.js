import React from 'react'

const SearchResults = (props) => {
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                <Book />
            </ol>
        </div>
    );
}

export default SearchResults;