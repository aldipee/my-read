import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import Book from './Book';
import * as BooksAPI from './../BooksAPI';
import { Consumer } from '../context';

export default class Search extends PureComponent {

    static propTypes = {
      updateBook : PropTypes.func.isRequired
    }
  
    state = {
      books : []
    }

    handleChange = (query) =>{
      BooksAPI.search(query.trim()).then(books => {
        this.setState({books})
      })
    }
   
    render(){
        return(
            <Consumer>
              {({actions}) =>(
                <div className="search-books">
                <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text" onChange={(e) => this.handleChange(e.currentTarget.value)} placeholder="Search by title or author"/>
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {this.state.books instanceof Array && this.state.books.map((data,index) => (
                     <Book data={data} srcHome={false} updateBook={(book,shelf) =>{
                      actions.updateBook(book, shelf,'search')
                      this.props.history.push('/');
                     }} key={index}/>
                  ))}
                </ol>
              </div>
            </div>
              )}
            </Consumer>
        )
    }
}