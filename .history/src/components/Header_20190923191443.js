import React from 'react';
import styled from 'styled-components';

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
            
        </Nav>
    );
};

export default Header;