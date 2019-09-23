import React from "react";
import styled from "styled-components";


const Detail = ({ match }) => {
    return (
        <div>
            Detail Page{match.params.id}

        </div>
    )
    
}


export default Detail;