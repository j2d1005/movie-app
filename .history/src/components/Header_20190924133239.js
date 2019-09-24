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
    border-right:1px solid #5e6273;
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
            font-size:1.1rem;
            text-decoration:none;
            color:#5e6273;
            
            &:hover{
                color:#fff;
            }
        }
`;

const Header = () => {
    return (
        <Nav>
            <nav>
                <Link to="/" className="item">NowPlaying </Link>
                <Link to="/Popular" className="item">Popular</Link>
                <Link to="/UpComing" className="item">UpComing</Link>
                <Link to="/TopRated" className="item">TopRated</Link>
                <Link to="/url/HONG3" className="item">URL 파라미터 연습</Link>
            </nav>
        </Nav>
    );
};

export default Header;