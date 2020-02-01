import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

 const Book = ({data,updateBook, srcHome}) =>(
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${data.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={(e) => updateBook(data, e.currentTarget.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="move"></option>
                    <option value="wantToRead">Akan Dibaca</option>
                    <option value="currentlyReading">Sedang Dibaca</option>
                    <option value="read">Selesai Dibaca</option>
                    <option value="bingo">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{srcHome ? <Link to={`/detail/${data.id}`}>{data.title}</Link> : <a href='#' onClick={() => alert('Untuk melihat detail, silahkan masukan buku kedalam daftar bacaan kamu terlebih dahulu.')}>{data.title}</a>}</div>
            <div className="book-authors">{data.authors}</div>
            </div>
          </li>
 )

Book.propTypes = {
  data : PropTypes.object.isRequired,
  updateBook : PropTypes.func.isRequired
}


 export default Book