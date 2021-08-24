import React from 'react'

const Bookshelf = props => {
    const {shelf} = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <Book book={{}}/>
                </ol>
            </div>

        </div>
    )
}

export default Bookshelf;