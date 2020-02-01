import React from 'react'
import ReactDOM from 'react-dom'
import BooksApp from './App'
import Provider from './context/index'
import './index.css'



ReactDOM.render(<Provider><BooksApp /></Provider>,document.getElementById('root'))
