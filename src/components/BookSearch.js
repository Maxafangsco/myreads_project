import React, { Component } from 'react'

class BookSearch extends Component{
    render(){
        return (
            <div className="search-books">
                <SearchBar />
                <SearchResults />
            </div>
        );
    }
}

export default BookSearch;