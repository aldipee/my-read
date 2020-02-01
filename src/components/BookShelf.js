import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';
import { Consumer } from '../context';


const BookShelf = ({title, category}) =>(
              <Consumer>
                {value => {
                  const {books, actions} = value 
                  let booksData = []
                  if(category){
                    booksData = books.filter(data => data.shelf === category);
                  }else{
                    booksData = books;
                  }
                  return(
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">{title}<span> ({booksData.length})</span></h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                            {booksData.map((data,index)=>(
                              <Book data={data} updateBook={actions.updateBook} key={index} srcHome={true}/>
                            ))}
                        </ol>
                      </div>
                    </div>
                  )
                }}
            </Consumer>
)

BookShelf.propTypes = {
  title : PropTypes.string.isRequired,
  category : PropTypes.string.isRequired
}

export default BookShelf;