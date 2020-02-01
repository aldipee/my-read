import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Home from './components/Home'
import Search from './components/Search'
import NotFound from './components/NotFound'
import './App.css'
import Detail from './components/Details';

class BooksApp extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="app">    
          <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/search' component={Search} />
           <Route path='/detail/:bookID' component={Detail}/>
           <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
