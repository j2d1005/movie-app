import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Nav = styled.header`
    background : #e15f41;
    display:table;
    table-layout:fixed;
    width:100%;
        .item {
            display:table-cell;
            padding-top:1rem;
            padding-bottom:1rem;
            text-align:center;
            colot:#fff;
            font-size:1.5rem;
            &:hover{
                color:#e15f41;
                backgorund:#fff;
            }
        }
`;

const Header = () => {
    return (
        <Nav>
            <Link to="/" className="item">현재 상영중</Link>
            <Link to="/Popular" className="item">인기 순위</Link>
            <Link to="/UpComming" className="item">개봉 예정</Link>
            <Link to="/TopRated" className="item">평점 순위</Link>
        </Nav>
    );
};

export default Header;