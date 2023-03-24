import React from 'react'
import styled from "styled-components"

/*
export function Button(props) {
    return (
        <div>ScaleButton</div>
    )
}
*/

export const ScaleButton = styled.div`
font-family: 'Lato', sans-serif;
margin-top: 25px;
background-color: #394450;
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 25px;
opacity: 0.85;
text-transform: uppercase;
font-size: 16px;

&:hover {
    cursor: pointer;
    transform: scale(1.025);
}
`