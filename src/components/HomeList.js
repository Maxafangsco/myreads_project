import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'


class HomeList extends Component{
  
  
    render (){
        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
           <div className="list-books-content">
          		<div>
              {/* {  console.log(this.props)} */}
                  <Shelf manageBookShelf={this.props.manageBookShelf} title={"Currently Reading"} booksList={this.props.currentlyReading}/>
                  <Shelf manageBookShelf={this.props.manageBookShelf} title={"Want to read"} booksList={this.props.wantToRead}/>
                  <Shelf manageBookShelf={this.props.manageBookShelf} title={"Read"} booksList={this.props.read} />
           		</div>
           </div>
            <div className="open-search">
          	  <Link className="close-search" to="/search">Add a book</Link>
            </div>
           </div>
        )
    }
}
export default HomeList;