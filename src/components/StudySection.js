import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Study from "../assets/study.jpg";

function StudySection() {
  const schedules = useMemo(
    () => ({
      "Spring 2023": [
        {
          date: "13.01.23",
          speaker: "Torjus",
          program: "Kickoff Spring 23'",
        },
        {
          date: "27.01.23",
          speaker: "Markus",
          program: "Workflow management tools",
        },
        {
          date: "25.03.23",
          speaker: "Torjus",
          program: "Building a webpage with React.js and Node.js",
        },
        {
          date: "07.04.23",
          speaker: "Christian",
          program: "Introduction to ML and Reinforcement Learning",
        },
        {
          date: "21.04.23",
          speaker: "Markus",
          program:
            "How to calculate faster than a calculator: Mental Arithmetics",
        },
      ],
      "Spring 2024": [
        {
          date: "09.02.24",
          speaker: "Torjus",
          program: "Designing better ML experiments",
        },
        {
          date: "23.02.24",
          speaker: "Christian",
          program: "Practical reinforcement learning case study",
        },
        {
          date: "08.03.24",
          speaker: "Markus",
          program: "Probability puzzles and intuition",
        },
        {
          date: "22.03.24",
          speaker: "Guest",
          program: "Guest session",
        },
      ],
      "Spring 2026": [
        {
          date: "TBA",
          speaker: "TBA",
          program: "Kickoff",
        },
      ],
    }),
    [],
  );

  const years = Object.keys(schedules);
  const [activeYear, setActiveYear] = useState(() =>
    years.includes("Spring 2024") ? "Spring 2024" : years[0],
  );

  return (
    <Container id="study-group">
      <Tableholder>
        <Table>
          <Title>Study Group Schedule</Title>
          <YearTabs>
            {years.map((year) => (
              <YearTab
                key={year}
                type="button"
                $active={year === activeYear}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </YearTab>
            ))}
          </YearTabs>

          <Subtitle>
            <StudyDate>Date</StudyDate>
            <Speaker>Speaker</Speaker>
            <Program>Program</Program>
          </Subtitle>

          <RowsWrap>
            {schedules[activeYear].map((entry) => (
              <Row key={`${activeYear}-${entry.date}-${entry.speaker}`}>
                <StudyDate>{entry.date}</StudyDate>
                <Speaker>{entry.speaker}</Speaker>
                <Program>{entry.program}</Program>
              </Row>
            ))}
          </RowsWrap>
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
  padding: 0px 20px;
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
  width: 360px;
  line-height: 1.5;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 640px;
  }
`;

const Tableholder = styled.div`
  width: 100%;
  max-width: 680px;
`;

const Table = styled.div`
  background: linear-gradient(
    180deg,
    rgba(31, 51, 69, 0.95),
    rgba(21, 35, 48, 0.92)
  );
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  font-size: 16px;
  padding: 20px 18px;
  text-align: left;
  backdrop-filter: blur(2px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 14px;
  letter-spacing: 0.02em;
`;

const YearTabs = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 14px;
`;

const YearTab = styled.button`
  border: none;
  border-radius: 999px;
  padding: 8px 14px;
  font-family: "Lato", sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.02em;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#0b1d2c" : "#d7ecff")};
  background: ${(props) =>
    props.$active
      ? "linear-gradient(90deg, #7bd7ff, #4eb3ff)"
      : "rgba(130, 182, 221, 0.2)"};
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px 10px;
  border-radius: 10px;

  &:nth-child(odd) {
    background: rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 4px 10px;
  }
`;

const RowsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StudyDate = styled.div`
  flex: 0 0 95px;
  font-weight: 700;
  color: #8de1ff;
`;

const Subtitle = styled(Row)`
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
  color: #c9e8ff;
  background: transparent !important;
`;

const Speaker = styled.div`
  flex: 0 0 110px;
  font-weight: 600;
`;

const Program = styled.div`
  flex: 1;
`;

const TextBox = styled.div`
  padding: 0px 20px;
`;
