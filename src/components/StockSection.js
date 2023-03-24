import React from 'react'
import styled from "styled-components"
import StockImage from '../assets/etl_flowchart.png'
import Fade from 'react-reveal/Fade';
import { ScaleButton } from './Button'

function ContactSection() {
    return (
        <Container>
            <Description>
                <Fade bottom>
                    <h1>
                        Stock Crawler
                    </h1>

                    <p>
                        This is an extension of the Nordic Screener project. The goal here is to establish datapipelines and long term
                        storage of data from all 8400+ NASDAQ listed stocks. This is then further leveraged in analysis and pilots of custom ML models.
                    </p>

                    <a href="https://github.com/torjusn/stock_crawler_and_screener">
                        <ScaleButton>
                            View On Github
                        </ScaleButton>
                    </a>
                </Fade>
            </Description>

            <Image src={StockImage} />
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
    background-color: #FDFBF1;
`
{/* padding-bottom: 60px;*/ }

const Description = styled.div`
    h1{
        font-family: 'Lato', sans-serif;
        margin-bottom: 25px;
        position: relative;

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

    p {font-family: 'Aleo', serif;}

    text-align: left;
    width: 320px;
    line-height: 1.5;
`

const Image = styled.img`
    width: 50vw;
    height: 50vw;
    object-fit: contain;
`
