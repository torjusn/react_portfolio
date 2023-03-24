import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Study from "../assets/study.jpg";

function StudySection() {
  return (
    <Container>
      <Tableholder>
        <Table>
          <Title> Schedule Spring 2023 </Title>
          <Subtitle>
            <StudyDate> Date </StudyDate>
            <Speaker> Speaker</Speaker>
            <Program> Program </Program>
          </Subtitle>
          <Row>
            <StudyDate> 25.3 </StudyDate>
            <Speaker>Torjus</Speaker>
            <Program> React.js</Program>
          </Row>
          <Row>
            <StudyDate> 7.4</StudyDate>
            <Speaker>Christian</Speaker>
            <Program> Reinforcement Learning </Program>
          </Row>
          <Row>
            <StudyDate> 21.4</StudyDate>
            <Speaker>Markus</Speaker>
            <Program> TBA </Program>
          </Row>
        </Table>
      </Tableholder>
      <Description>
        <Fade bottom>
          <TextBox>
            <h1>Study Group</h1>

            <p>
              We hold bi-weekly study groups where post-graduate friends from
              M.Sc's and Ph.D's in Math and scientific fields take turns to
              present a topic, project or research paper.
            </p>

            <h1>Past Topics</h1>

            <p>
              Reinforcement Learning, Workflow Tools (Logseq, Obsidian,
              Excalidraw), Stock Screening (Python), React
            </p>
          </TextBox>
        </Fade>
      </Description>
    </Container>
  );
}

export default StudySection;

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 100px;
  background-size: cover;
  background-image: url(${Study});
`;

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
      border-radius: 5px;
    }
  }

  p {
    font-family: "Aleo", serif;
    color: white;
  }

  text-align: left;
  width: 320px;
  line-height: 1.5;
`;

const Image = styled.img`
  width: 50vw;
  height: 50vw;
  object-fit: contain;
`;
const Tableholder = styled.div``;

const Table = styled.div`
  /*
  display: flex;
  flex-direction: column;
  */
  background-color: #394450;
  height: 512px;
  width: 400px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  opacity: 0.85;
  font-size: 16px;
`;

const Title = styled.div``;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const StudyDate = styled.div`
  flex: 1;
  color: red;
`;

const Subtitle = styled(Row)`
  ${StudyDate} {
    color: blue;
  }
`;

const Speaker = styled.div`
  flex: 1;
`;

const Program = styled.div`
  flex: 1;
`;

const TextBox = styled.div``;
