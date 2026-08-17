import React from "react";
import styled from "styled-components";
import Nordic from "../assets/nordic_screener.png";
import Fade from "react-reveal/Fade";

function ContactSection() {
  return (
    <Container id="nordic-screener">
      <Description>
        <Fade bottom>
          <h1>Nordic Screener</h1>

          <p>
            Collect stock metrics through the Yahoo Finance API for the nordic
            markets and rank them based on a set of composite metrics from{" "}
            <a
              target="_blank"
              href="https://www.amazon.com/Little-Book-Still-Beats-Market/dp/0470624159"
            >
              <strong>The Little Book That Beats the Market</strong>
            </a>
            by J. Greenblatt. Stock metrics are obtained by referencing ticker
            codes in yf, e.g. CRAYN.OL for Crayon Group Holding ASA, and
            responds with financial- and general info for that stock.
          </p>

          <a target="_blank" href="https://github.com/torjusn/nordic_screener">
            <button class="btn-hover color-9">VIEW ON GITHUB</button>
          </a>
        </Fade>
      </Description>

      <Image src={Nordic} />
    </Container>
  );
}

export default ContactSection;

const Container = styled.div`
  padding: 0px 20px;
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 0 100px;
  background-size: cover;
  background-color: #fdfbf1;
`;
{
  /* padding-bottom: 60px;*/
}

const Description = styled.div`
  h1 {
    font-family: "Lato", sans-serif;
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
      border-radius: 2px;
    }
  }

  p {
    font-family: "Aleo", serif;
  }

  text-align: left;
  width: 320px;
  line-height: 1.5;
`;

const Image = styled.img`
  width: 50vw;
  @media (max-width: 900px) {
    width: 100%;
  }
  object-fit: contain;
`;
