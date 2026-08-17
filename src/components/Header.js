import React from "react";
import styled from "styled-components";
import GithubIcon from "../assets/github2.png";
import LinkedInIcon from "../assets/linkedin2.png";
{
  /*torjus.ai*/
}

function Header() {
  return (
    <Container>
      <a href="#">
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/favicon.ico?v=20260817`}
            alt="adjustai icon"
            style={{ height: "1em", borderRadius: 5 }}
          />
          adjustai.net
        </Logo>
      </a>
      <Menu>
        <p className="hover-underline-animation">
          <a href="#stock-crawler">Stock Crawler</a>{" "}
        </p>
        <p className="hover-underline-animation">
          <a href="#study-group">Study Group</a>{" "}
        </p>
        <p className="hover-underline-animation">
          <a href="#nordic-screener">Nordic Screener</a>{" "}
        </p>
      </Menu>
      <Icons>
        <a target="_blank" href="https://github.com/torjusn">
          {" "}
          <img alt="Git" src={GithubIcon} width="32" height="32" />{" "}
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/torjus-nilsen/">
          {" "}
          <img alt="Linked" src={LinkedInIcon} width="32" height="32" />{" "}
        </a>
      </Icons>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  background-color: #0008;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  color: #fffc;
  backdrop-filter: blur(20px);

  a,
  a:visited,
  a:hover,
  a:active {
    color: #fffc;
  }
`;

const Logo = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 32px;
`;

const Menu = styled.div`
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-family: "Lato", sans-serif;
  }

  /*
    a:hover{
        color: #fffc;
    }
    */

  p {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Github = styled.div`
  width: 10px;
  height: 10px;
  object-fit: contain;
`;

const LinkedIn = styled.div`
  width: 10px;
  height: 10px;
  object-fit: contain;
`;
