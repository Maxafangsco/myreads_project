import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import HomeList from './components/HomeList';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }
  componentDidMount(){
   BooksAPI.getAll().then((books)=>{
            let wantToRead = [];
            let read = [];
            let booksCurrentlyReading = [];
           
     
     books.forEach((val) =>{
     	switch(val.shelf){
          case "wantToRead" :
       wantToRead.push(val);
            break;
          case "currentlyReading" :
            booksCurrentlyReading.push(val);
            break;
          case "read" :
            read.push(val);
            break;
          default:
            break;
        }
     })
   	this.setState({
            wantToRead: wantToRead,
            read: read,
            currentlyReading: booksCurrentlyReading
    })
   })
  }
  manageBookShelf = (book, shelf) => {
    
        BooksAPI.update(book, shelf).then(()=>{
                  let booksWantToRead = this.state.wantToRead.filter((item)=>(item.id!==book.id));
                  let booksRead = this.state.read.filter((item)=>(item.id!==book.id));
                  let booksCurrentlyReading = this.state.currentlyReading.filter((item)=>(item.id!==book.id));
          
          book.shelf = shelf;
          switch(shelf){
            case 'currentlyReading':
              booksCurrentlyReading.push(book);
              break;
            case 'wantToRead':
              booksWantToRead.push(book);
              break;
            case 'read':
              booksRead.push(book);
              break;
            case 'none':
              break;
            default:
              break;
          }

          this.setState({
            wantToRead: booksWantToRead,
            read: booksRead,
            currentlyReading: booksCurrentlyReading
          });
        });
  }
  render() {
    return (
      <div className="app">
         <Route path="/search" render={props=><SearchPage manageBookShelf={this.manageBookShelf} />}
       		/>
         <Route path="/" exact render={props=><HomeList manageBookShelf={this.manageBookShelf}
       		currentlyReading={this.state.currentlyReading}
       		wantToRead={this.state.wantToRead}
       		read={this.state.read}/>} 
       		/>
      </div>
    )
  }
}
export default App;