import React from "react";
import { LeftOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useNavigate } from "react-router";
export const TopHeader = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <LeftOutlined
        style={{ fontSize: "18px", color: "#fff" }}
        onClick={() => {
          navigate(-1);
        }}
      />
      {props.render()}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 60px;
  background-color: #272822;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
`;
