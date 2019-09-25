import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Page = styled.ul`
   color:#fff;
`;

const Pagination = ({ target, current }) => {

    return (
        <Page>
            {target.map((num, index) =>(
                <li
                    key={num}
                    className={index === current ? 'active' : ''}
                >
                    <button>

                    </button>
                </li>
            ))}            
        </Page>
    )
    
}


export default Pagination;