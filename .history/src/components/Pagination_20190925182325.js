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
                <button
                    onClick={()=>{
                        // if(currentPage === 1){ return alert('첫번째 페이지 입니다.');}
                        // if(currentPage % 10 === 1){
                        //     const s = start-10;
                        //     const e = end-10    
                        // }
                    }}
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