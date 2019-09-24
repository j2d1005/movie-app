import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Nav = styled.div`
    position:fixed;
    display:table;
    width:200px;
    height:100%;
    background : #020024;   
    vertical-align:middle;
    z-index:999;
        
        .title {
            position:absolute;
            width:100%;
            top:20px;
            font-size:2.5rem;
            text-align:center;
            color:#fff;

        }
        nav {
            display:table-cell;
            vertical-align:middle;
            margin-top:-50px;

            .item {
                float:left;
                width:100%;
                padding: 1rem 20px;
                text-align:center;
                color:#fff;
                font-size:1.1rem;
                text-decoration:none;
                color:#5e6273;
                border-right:1px solid #5e6273;
                
                &:hover{
                    color:#fff;
                }

                &.active{

                }
            }
        }
        .nav_mo {
            display:none;
            position:fixed;
            width:30px;
            height:30px;
            border-radius:30px;
            left:-15px;
            top:0;
            bottom:0;
            margin:auto;
            background:#1cb4bd;

             /* &:hover {
                 left:150px;
                 .header { 
                     left:0;
                 }
             } */
        } 
    @media(max-width:768px){
        width:150px;
        left:-150px;

        .nav_mo {
            display:block;
        }
    }
        
`;

const Header = () => {
    return (
        <Nav className="header">
            <h1 className="title">Movies</h1>
            <nav>
                <NavLink to="/" className="item" activeClassName="active">NowPlaying </NavLink>
                <NavLink to="/Popular" className="item">Popular</NavLink>
                <NavLink to="/UpComing" className="item">UpComing</NavLink>
                <NavLink to="/TopRated" className="item">TopRated</NavLink>
                <NavLink to="/url/HONG3" className="item">URL 파라미터 연습</NavLink>
            </nav>
            <button className="nav_mo"></button>
        </Nav>
        
    );
};

export default Header;