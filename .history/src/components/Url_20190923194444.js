import React from 'react';

const List = ({ match }) => {
    return (
        <p>{match.params.username}의 소개</p>
    )
}

export default List;