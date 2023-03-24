import React from "react";
import styled from "styled-components";
import GithubIcon from "../assets/github2.png";
import LinkedInIcon from "../assets/linkedin2.png";
import nordicImage from "../assets/etl_flowchart.png";

{
  /*torjus.ai*/
}

function Header() {
  return (
    <Container>
      <a href="#">
        <Logo>adjustai.net</Logo>
      </a>
      <Menu>
        <p class="hover-underline-animation">
          <a href="#">Study Group</a>{" "}
        </p>
        <p class="hover-underline-animation">
          <a href="#">Nordic Screener</a>{" "}
        </p>
        <p class="hover-underline-animation">
          <a href="#">Stock crawler</a>{" "}
        </p>
      </Menu>
      <Icons>
        <a href="https:/github.com/torjusn">
          {" "}
          <img alt="Git" src={GithubIcon} width="32" height="32" />{" "}
        </a>
        <a href="https://www.linkedin.com/in/torjus-nilsen/">
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
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  color: #fffc;
  backdrop-filter: blur(20px);
`;

const Logo = styled.div`
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
