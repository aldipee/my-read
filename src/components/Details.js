import React, {PureComponent} from 'react';
import SkeletonLoader from "tiny-skeleton-loader-react";
import {ContextApp} from '../context'
import { Link } from 'react-router-dom';

class Detail extends PureComponent {

    static contextType = ContextApp
    render(){
        const {books} = this.context
        const {match} = this.props
        const {bookID} = match.params
        const book = books.filter(({id}) => id === bookID)
        const data = book[0]
        console.log(data)
        return(
            data ? (
            <div className='book-details'>
                <span><Link to='/'>Back to Home</Link></span>
                <h1 className="detail-title">{data.title}</h1>
                <img className='detail-image'src={`${data.imageLinks.thumbnail}`} alt=""/>
                <div className="detail-info">
                    <p className="description">Author(s) : {data.authors}</p>
                    <p className="description">Publisher : {data.publisher}</p>
                    <p className="description">Date Publish : {data.publishedDate}</p>
                    <p className="description">Total Page : {data.pageCount}</p>
                    <p className="description">{data.description}</p>
                </div>
            
                
                

            </div>
            ) : (
            <div className='book-details'>
                
                <h1 className="detail-title"><SkeletonLoader width={"100%"}/></h1>
                <div className='detail-image'><SkeletonLoader width={"100%"} height={'480px'}/> </div>
                <div className="detail-info">
                    <p className="description"><SkeletonLoader width={"60%"}/> </p>
                    <p className="description"><SkeletonLoader width={"60%"}/> </p>
                    <p className="description"><SkeletonLoader width={"60%"}/> </p>
                    <p className="description"><SkeletonLoader width={"60%"}/> </p>
                    <p className="description"><SkeletonLoader width={"100%"} count={6} animated={false}/></p>
                    <p className="description"><SkeletonLoader width={"100%"} count={'6'} animated={false}/></p>
                    <p className="description"><SkeletonLoader width={"100%"} count={'6'} animated={false}/></p>
                    <p className="description"><SkeletonLoader width={"100%"} count={'6'} animated={false}/></p>
                    <p className="description"><SkeletonLoader width={"100%"} count={'6'} animated={false}/></p>
                    <p className="description"><SkeletonLoader width={"100%"} count={'6'} animated={false}/></p>
                    <p className="description"><SkeletonLoader width={"100%"} count={'6'} animated={false}/></p>
                </div>
            </div>

            )
        )
    }
}

export default Detail