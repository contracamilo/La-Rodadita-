
import React from 'react';
import BookList from './BookList';
import BookFilter from './BookFilters';
 
const searchList = () => (
    <div className='container__list'>
        <BookFilter />
        <BookList />
    </div>
);
 
export default searchList;