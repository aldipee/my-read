import React,{Component} from 'react';

import * as BooksAPI from './../BooksAPI'
import * as Utils from './../utils'

export const ContextApp = React.createContext();

export default class Provider extends Component{
   

    state = {
        books : [],
        category : []
    }
  
      //get Data from API
      componentDidMount(){
        BooksAPI.getAll().then(data =>{
          this.setState({books : data, category : Utils.categoryTitle(data)})
          // const categories = data.map(data => data.shelf);
          // const getCategories = categories.filter((item,index)=> categories.indexOf(item) === index)

        })
        
      }


      updateBook = (book, shelf,source) =>{
        console.log('CLICK',shelf)
        BooksAPI.update(book,shelf).then(data => {
          //book is a object
          book.shelf = shelf
          if(source === 'search'){
            this.setState((prevData) =>{
              return {
                books : [...prevData.books, book]
              }
            })
          }else{
            this.setState({shelf})
          }
        })
      }
    
    render(){
        return(
            <ContextApp.Provider value={{books : this.state.books, category : this.state.category, actions : { updateBook : this.updateBook}}}>
                {this.props.children}
            </ContextApp.Provider>
        )
    }

}
export  const Consumer = ContextApp.Consumer;