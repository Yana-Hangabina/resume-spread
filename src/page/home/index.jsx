import React from "react";
import Logo from "../../assets/logo.png";
import styled from "styled-components";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={Logo} alt="logo" width={"200px"} height={"200px"} />
      <Text>Résumé 展开：拖拽式的低代码简历页面生成器</Text>
      <div className="btn-group">
        <BtnContainer
          onClick={() => {
            navigate("/makeresume");
          }}
        >
          <span>Get Start</span>
          <div className="liquid"></div>
        </BtnContainer>
        <BtnContainer>
          <span style={{ color: "#000" }}>了解我们</span>
        </BtnContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  /* background: linear-gradient(135deg, #86fde8, #acb6e5); */
  background-color: #27292d;
  .btn-group {
    width: 40%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
  }
`;
const BtnContainer = styled.button`
  cursor: pointer;
  position: relative;
  padding: 19px 36px;
  min-width: 180px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  border-radius: 10px;
  border: none;
  span {
    position: relative;
    color: #fff;
    font-size: 20px;
    letter-spacing: 2px;
    z-index: 1;
    font-weight: bold;
  }
  .liquid {
    position: absolute;
    top: -80px;
    left: 0;
    width: 100%;
    height: 200px;
    background: #4973ff;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }
  .liquid::after,
  .liquid::before {
    content: "";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
    background: #fff;
  }

  .liquid::before {
    border-radius: 45%;
    background: rgba(20, 20, 20, 1);
    animation: animate 5s linear infinite;
  }

  .liquid::after {
    border-radius: 40%;
    background: rgba(20, 20, 20, 0.5);
    animation: animate 10s linear infinite;
  }

  &:hover .liquid {
    top: -120px;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`;

const Text = styled.p`
  color: #fff;
  letter-spacing: 8px;
`;
