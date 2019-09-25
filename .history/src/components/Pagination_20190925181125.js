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
            {target.map((num, index) =>(
                <li className="prev">
                    <button>prev</button>
                </li>
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