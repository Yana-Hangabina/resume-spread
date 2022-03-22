import React from "react";
import Logo from "../../assets/logo.png";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <LogoContainer>
          <img src={Logo} alt="logo" width={"200rem"} height={"200rem"} />
        </LogoContainer>
        <Title>Résumé 展开</Title>
        <Description>拖拽式的低代码简历页面生成器</Description>
        <div className="btn-group">
          <BtnContainer
            onClick={() => {
              navigate("/makeresume");
            }}
          >
            <span>Get Start</span>
            <div className="liquid"></div>
          </BtnContainer>
          <BtnContainer onClick={() => {
              navigate("/aboutus");
            }}>
            <span style={{ color: "#000" }}>了解我们</span>
          </BtnContainer>
        </div>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #27292d;
  background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23808183' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  .btn-group {
    margin-top: 20px;
    display: flex;
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FadeInLogo = keyframes`
  from {
    opacity: 0;
    transform: translateY(60%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const LogoContainer = styled.div`
  animation: 1s ${FadeInLogo} cubic-bezier(0.42, 0, 0.58, 1);
`;
const FadeInContent = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const BtnContainer = styled.button`
  animation: 1.5s ${FadeInContent} cubic-bezier(1, 0, 0.42, 0.66);
  cursor: pointer;
  position: relative;
  padding: 16px 32px;
  margin: 0 16px;
  min-width: 180px;
  display: block;
  text-transform: uppercase;
  font-weight: 700;
  overflow: hidden;
  border-radius: 15px;
  border: none;
  span {
    position: relative;
    color: #fff;
    font-size: 1.2rem;
    letter-spacing: 2px;
    z-index: 1;
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
    background: rgba(48, 141, 234, 1);
    animation: animate 5s linear infinite;
  }

  .liquid::after {
    border-radius: 40%;
    background: rgba(160, 213, 249, 0.5);
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

const Title = styled.h1`
  animation: 1.5s ${FadeInContent} cubic-bezier(1, 0, 0.42, 0.66);
  margin-top: 20px;
  color: #fff;
  font-weight: 900;
  font-size: 2rem;
  letter-spacing: 8px;
`;

const Description = styled.p`
  animation: 1.5s ${FadeInContent} cubic-bezier(1, 0, 0.42, 0.66);
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 8px;
`;
