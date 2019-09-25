import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Page = styled.ul`
   color:#fff;
   li{
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

const Pagination = ({ target, currentPage, updateCurrentPage, prevPage }) => {

    return (
        <Page>
            <li className="prev">
                <button
                    onClick={()=>{prevPage();}}
                >prev</button>
            </li>
            {target.map((num, index) =>(
                <li key={num} className={num === currentPage ? 'active' : ''}>
                    <button onClick={()=>{updateCurrentPage(num)}}>
                        {num}
                    </button>
                </li>
            ))}      
            <li className="next">
                <button>next</button>
            </li>      
        </Page>
    )
    
}


export default Pagination;