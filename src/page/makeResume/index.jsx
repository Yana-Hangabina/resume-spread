import { Button } from "antd";
import React from "react";
import { TopHeader } from "../../components/topHeader";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useDrag } from "react-dnd";
export const MakeResume = () => {
  const navigate = useNavigate();
  const [collect, dragDiv] = useDrag(() => {
    return {
      type: "",
    };
  }, []);
  return (
    <div>
      <TopHeader
        render={() => {
          return (
            <BtnGroup>
              <Button type={"primary"} size={"large"}>
                新建简历
              </Button>
              <Button
                type={"primary"}
                size={"large"}
                onClick={() => {
                  navigate("/resumetemp");
                }}
              >
                使用模板
              </Button>
            </BtnGroup>
          );
        }}
      />
      <DragDiv ref={dragDiv}></DragDiv>
    </div>
  );
};

const BtnGroup = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: space-between;
`;

const DragDiv = styled.div`
  width: 200px;
  height: 200px;
  background-color: #1890ff;
`;
