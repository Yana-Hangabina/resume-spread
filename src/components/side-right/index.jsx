import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
const { Sider } = Layout;
export const SideRight = ({ title, render }) => {
  return (
    <div>
      <Sider collapsed={false} width={300}>
        <div
          style={{
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            backgroundColor: "#fff",
          }}
        >
          <RightTitle>{title}</RightTitle>
          <MainContainer>{render()}</MainContainer>
        </div>
      </Sider>
    </div>
  );
};

const RightTitle = styled.div`
  min-height: 60px;
  background-color: #ccc;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
`;

const MainContainer = styled.div``;
