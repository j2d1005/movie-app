import React, { useState, useEffect } from 'react';

import Header from "../components/Header"


const HeaderContainer = ({ }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const navOpen = () => {
        {(isOpen)
            ? setIsOpen(false)
            : setIsOpen(true)
        }
        console.log(isOpen);
    }

    return (
            <Header 
                isOpen={isOpen}
                navOpen={navOpen}
            />
    )
    
}


export default HeaderContainer;