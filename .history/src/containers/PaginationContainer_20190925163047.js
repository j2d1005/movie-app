import React, { useState, useEffect } from 'react';

import Pagination from '../components/Pagination';

const PaginationContainer = ({ pageLength }) => {

    const array = [];
    for (let i=0; i<pageLength; i++){
        array.push(i+1);
    }
    console.log(array);

    return (
        <Pagination />
    )
}

export default PaginationContainer;