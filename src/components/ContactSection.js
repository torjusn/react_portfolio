import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Lottie } from "lottie-react";
import Background from "../assets/circuit_darken.jpg";
import SomeCode from "../assets/some_code.png";
import animationData from "../assets/face_recognition_blue.json";

function ContactSection() {
  return (
    <Container>
      <Image src={SomeCode} />
      <Description>
        <Fade bottom>
          <h1>Hi, I'm Torjus</h1>

          <p>
            I'm a Data Scientist in Machine Learning. Some of my current side
            projects involve programming, study groups and stock-/timeseries
            analysis.
          </p>

          <a href="mailto:torjus.tech@gmail.com">
            <button
              onClick={() => (window.location = "mailto:torjus.tech@gmail.com")}
              class="btn-hover color-9"
            >
              CONTACT ME
            </button>
          </a>
        </Fade>
      </Description>
      <Anime>
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: 250, height: 250 }}
        />
      </Anime>
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
  background-image: url(${Background});
`;
{
  /* background-color: #FDFBF1;
padding-bottom: 60px;*/
}

const Description = styled.div`
  h1 {
    font-family: "Lato", sans-serif;
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
      border-radius: 2px;
    }
  }

  p {
    font-family: "Aleo", serif;
    color: white;
  }

  text-align: left;
  width: 320px;
  line-height: 1.5;
  @media (max-width: 768px) {
    order: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: 500px;
  object-fit: contain;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Anime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
