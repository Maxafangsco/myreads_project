import React, { Component } from 'react';
import BookShelf from './BookShelf';
class Shelf extends Component{
    render (){
        return (
          <BookShelf title={this.props.title} manageBookShelf={this.props.manageBookShelf} booksList={this.props.booksList} />
        )
    }
}
export default Shelf;