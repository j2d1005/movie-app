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
    useEffect(()=>{
        getMovieDetail();
    }, []); // [] 해줘야 한번만 실행한다.

    return (
            <Header 
                
            />
    )
    
}


export default HeaderContainer;