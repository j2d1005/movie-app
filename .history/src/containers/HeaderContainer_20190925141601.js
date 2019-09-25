import React, { useState, useEffect } from 'react';

import Header from "../components/Header"


const HeaderContainer = ({ }) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const navOpen = () => {
        {(isOpen)
            ? setIsOpen(false)
            : setIsOpen(true)
        }
    }

    return (
            <Header 
                { ...isOpen === true ? ClassName="open" : ''}
            />
    )
    
}


export default HeaderContainer;