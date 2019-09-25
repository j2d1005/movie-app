import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Page = styled.ul`
    padding: 50px;
    text-align:center;
    font-size: 1.1rem;
   li{
       display:inline-block;
       margin: 0 10px;
       &.pagelist{
           
       }
       &.active{
           button{
               color:#1cb4bd;
               font-size:16px;
           }
       }
       button{
           color:#fff;
           font-size: 14px;

           &:hover {
            color:#1cb4bd;
           }
       }
   }
`;

const Pagination = ({ target, currentPage, updateCurrentPage, prevPage, nextPage }) => {

    return (
        <Page>
            <li className="prev">
                <button
                    onClick={()=>{prevPage();}}
                >prev</button>
            </li>
            {target.map((num, index) =>(
                <li key={num} className={num === currentPage ? 'pagelist active' : 'pagelist'}>
                    <button onClick={()=>{updateCurrentPage(num)}}>
                        {num}
                    </button>
                </li>
            ))}      
            <li className="next">
                <button
                    onClick={()=>{nextPage();}}
                >next</button>
            </li>      
        </Page>
    )
    
}


export default Pagination;