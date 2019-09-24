import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Nav = styled.div`
    position:fixed;
    display:table;
    width:200px;
    height:100%;
    background : #1f1e30;   
    vertical-align:middle;
        nav {
            display:table-cell;
            vertical-align:middle;
        } 
        .item {
            float:left;
            width:100%;
            padding: 1rem 20px;
            text-align:center;
            color:#fff;
            font-size:1.3rem;
            text-decoration:none;
            
            &:hover{
                background:#fff;
            }
        }
`;

const Header = () => {
    return (
        <Nav>
            <nav>
                <Link to="/" className="item">현재 상영중</Link>
                <Link to="/Popular" className="item">인기 순위</Link>
                <Link to="/UpComing" className="item">개봉 예정</Link>
                <Link to="/TopRated" className="item">평점 순위</Link>
                <Link to="/url/HONG3" className="item">URL 파라미터 연습</Link>
            </nav>
        </Nav>
    );
};

export default Header;