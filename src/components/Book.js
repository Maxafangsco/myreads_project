import React, { Component } from 'react';
class Book extends Component{
  
  constructor() {
    super();
    this.state = {
  		bookShelf: "none"
  	}
  }
  state = {
		bookShelf: "none"
	}

  componentDidMount(){
    this.setState({
    	bookShelf: this.props.bookData.shelf
    });
  }

changeStatus(event){
	this.props.manageBookShelf(this.props.bookData, event.target.value);
}
  
    render (){

      
        return (
        <div className="book">
                          <div className="book-top">
<div className="book-cover" style={{ width: 128, height: 193,
                        backgroundImage: (this.props.bookData.imageLinks) ? 
                        `url(${this.props.bookData.imageLinks.thumbnail})`
                        : `url(${'icons/no_image_available'})` }}></div>
  
                            <div className="book-shelf-changer">
								<select value={this.state.bookShelf} onChange={(event)=>this.changeStatus(event)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.bookData.title}</div>
                          <div className="book-authors">{this.props.bookData.authors ? this.props.bookData.authors.join(', '): ''}</div>
                        </div>
        )
    }
}
export default Book