import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Page = styled.ul`
   color:#fff;
`;

const Pagination = ({ target }) => {

    return (
        <Page>
            {target.map(mun =>(
                <li>
                    <button>

                    </button>
                </li>
            ))}            
        </Page>
    )
    
}


export default Pagination;