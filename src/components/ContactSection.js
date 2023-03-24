import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
import Background from '../assets/circuit_darken.jpg'
import { ScaleButton } from './Button'

function ContactSection() {
    return (
        <Container>
            <Description>
                <Fade bottom>
                    <h1>
                        Hi, I'm Torjus
                    </h1>

                    <p>
                        I'm a Data Scientist in Machine Learning. Some of my current side projects involve programming,
                        study groups and stock-/timeseries analysis.
                    </p>

                    <a href="mailto:tornil1996@hotmail.com">
                        <ScaleButton onClick={() => window.location = 'mailto:tornil1996@hotmail.com'}>
                            Contact Me
                        </ScaleButton>
                    </a>
                </Fade>
            </Description>
        </Container>
    )
}

export default ContactSection

const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 100px;
    background-size: cover;
    background-image: url(${Background});
`
{/* background-color: #FDFBF1;
padding-bottom: 60px;*/ }

const Description = styled.div`

    
    h1{
        font-family: 'Lato', sans-serif;
        margin-bottom: 25px;
        position: relative;
        color: white;

        :after {
            content: "";
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            height: 10px;
            background-image: linear-gradient(90deg, #394450, #08f);
            border-radius: 5px;
        }
    }

    p {font-family: 'Aleo', serif;
    color: white;}

    text-align: left;
    width: 320px;
    line-height: 1.5;
`

const Image = styled.img`
    width: 50vw;
    height: 50vw;
    object-fit: contain;
`