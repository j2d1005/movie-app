import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Page = styled.ul`
   color:#fff;
`;

const Pagination = ({ target, currentPage,  }) => {

    return (
        <Page>
            {target.map((num, index) =>(
                <li key={num} className={index === currentPage ? 'active' : ''}>
                    <button onClick={}>
                        {num}
                    </button>
                </li>
            ))}            
        </Page>
    )
    
}


export default Pagination;