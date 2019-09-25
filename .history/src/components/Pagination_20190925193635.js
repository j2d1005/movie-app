import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Page = styled.ul`
    text-align:color-interpolation-filters;
   li{
       display:inline-block;
       &.pagelist{
           
       }
       &.active{
           button{
               color:red;
           }
       }
       button{
           color:#fff;
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