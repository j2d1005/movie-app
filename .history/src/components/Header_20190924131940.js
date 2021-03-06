import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Nav = styled.header`
    position:fixed;
    width:200px;
    height:100%;
    background : #e15f41;    
        .item {
            width:100%;
            padding: 1rem 20px;
            text-align:center;
            color:#fff;
            font-size:1.3rem;
            text-decoration:none;
            border-bottom:1px solid #e15f41;
            &:hover{
                color:#e15f41;
                background:#fff;
            }
        }
`;

const Header = () => {
    return (
        <Nav>
            <Link to="/" className="item">현재 상영중</Link>
            <Link to="/Popular" className="item">인기 순위</Link>
            <Link to="/UpComing" className="item">개봉 예정</Link>
            <Link to="/TopRated" className="item">평점 순위</Link>
            <Link to="/url/HONG3" className="item">URL 파라미터 연습</Link>
        </Nav>
    );
};

export default Header;