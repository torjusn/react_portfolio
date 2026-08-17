import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Study from "../assets/study.jpg";

function StudySection() {
  return (
    <Container id="study-group">
      <Tableholder>
        <Table>
          <Title> Schedule Spring 2023 </Title>
          <Subtitle>
            <StudyDate> Date </StudyDate>
            <Speaker> Speaker</Speaker>
            <Program> Program </Program>
          </Subtitle>
          <Row>
            <StudyDate> 13.01.23 </StudyDate>
            <Speaker>Torjus</Speaker>
            <Program> Kickoff Spring 23' </Program>
          </Row>
          <Row>
            <StudyDate> 27.01.23 </StudyDate>
            <Speaker>Markus</Speaker>
            <Program> Workflow management tools</Program>
          </Row>
          <Row>
            <StudyDate> 25.03.23 </StudyDate>
            <Speaker>Torjus</Speaker>
            <Program> Building a webpage with React.js and Node.js</Program>
          </Row>
          <Row>
            <StudyDate> 07.04.23 </StudyDate>
            <Speaker>Christian</Speaker>
            <Program> Introduction to ML and Reinforcement Learning </Program>
          </Row>
          <Row>
            <StudyDate> 21.04.23 </StudyDate>
            <Speaker>Markus</Speaker>
            <Program>
              {" "}
              How to calculate faster than a calculator: Mental Arithmetics
            </Program>
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
  gap: 0 100px;
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
`;

const Image = styled.img`
  width: 50vw;
  height: 50vw;
  object-fit: contain;
`;
const Tableholder = styled.div``;

const Table = styled.div`
  background-color: #394450;
  height: 512px;
  width: 100%; /*400px*/
  max-width: 640px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  border-radius: 25px;
  opacity: 0.85;
  font-size: 16px;
  padding-top: 20px;
  text-align: left;
  padding-left: 10px;
`;

const Title = styled.div`
  font-weight: 100;
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const StudyDate = styled.div`
  flex: 0 0 100px;
`;

const Subtitle = styled(Row)`
  font-weight: 40;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Speaker = styled.div`
  flex: 0 0 100px;
`;

const Program = styled.div`
  flex: 1;
`;

const TextBox = styled.div`
  padding: 0px 20px;
`;
