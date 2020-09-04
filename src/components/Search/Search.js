import React from 'react';
import SearchFilter from '../SearchFilter/SearchFilter'


export default class Search extends React.Component {
    
    render () {
        console.log('Search Component is running')
        return (
            <SearchFilter onSubmit={this.props.onSubmit}/>
        );

    }  
}