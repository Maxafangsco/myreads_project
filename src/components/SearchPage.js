import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'
class SearchPage extends Component{
  
  state = {
  	booksAnswer: [],
    noneResult: false
  }
  
  search(event){
    if(event.target.value.length===0)
    	this.setState({
			booksAnswer: [],
			noneResult: false
		})
    	
    BooksAPI.search(event.target.value, 5).then((result)=>{
    	let noneResult = false;
		if(result.error){
    		noneResult = true;
    		result = [];
  			}
var promises = [];
result.forEach((elem, key)=>{
	promises.push(
    	BooksAPI.get(elem.id).then((data)=>{
        	result[key]["shelf"] = data.shelf 
        })
    );
})
Promise.all(promises).then(()=>{
    	this.setState({
			booksAnswer: result,
			noneResult: noneResult
		})
});
    })
  }
  
    render (){
        return (
            <div className="search-books">
            <div className="search-books-bar">
          	  <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(event)=>this.search(event)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className={"books-grid "+(this.state.noneResult ? "hideResult": "")}>
                      {this.state.booksAnswer.map((value)=>(
                        <li key={value.id}>
                      		<Book manageBookShelf={this.props.manageBookShelf} bookData={value} />
                      	</li>
        			))}
				</ol>
				<p className={(!this.state.noneResult ? "hideResult": "")}>No results :C</p>
            </div>
          </div>
        )
    }
}
export default SearchPage;