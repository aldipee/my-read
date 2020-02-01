import React from 'react';
import {Link} from 'react-router-dom';

import BookShelf from './BookShelf'
import {Consumer} from '../context/index'


const Home = () =>(
            <Consumer>
               {data =>(
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads list</h1>
                        </div>
                        <div className="list-books-content">
                            {data.category.map((book,index)=>(
                                <BookShelf title={book.title} key={index} books={data.books} updateBook={data.actions.updateBook} category={book.data}/>  
                            ))}          
                        </div>
                        <div className="open-search">
                            <Link to='/search'><button>Add a book</button></Link>
                        </div>
                    </div>
                )}
            </Consumer>
)
export default Home