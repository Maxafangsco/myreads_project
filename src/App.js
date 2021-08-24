import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link} from 'react-router-dom'

class BooksApp extends Component {
  state = {
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={BookList} />
        <Route  path="/search" component={BookSearch} />
      </div>
        )
    }
  }

export default BooksApp
