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

const Pagination = ({ target, currentPage, updateCurrentPage }) => {

    return (
        <Page>
            <li className="prev">
                <button>prev</button>
            </li>
            {target.map((num, index) =>(
                <li key={num} className={num === currentPage ? 'active' : ''}>
                    <button onClick={()=>{updateCurrentPage(num)}}>
                        {num}
                    </button>
                </li>
            ))}            
        </Page>
    )
    
}


export default Pagination;