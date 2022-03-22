import { Button } from "antd";
import React, { useState } from "react";
import { TopHeader } from "../../components/topHeader";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { DndProvider, useDrop } from "react-dnd";
import Text from "../../components/text";
import { FontSizeOutlined } from "@ant-design/icons";
import { HTML5Backend } from "react-dnd-html5-backend";
export const MakeResume = () => {
  const navigate = useNavigate();

  const PaperDorp = () => {
    const [{ canDrop, isOver }, drop] = useDrop(
      () => ({
        accept: "box",
        collect: (monitor) => ({
          canDrop: monitor.canDrop(),
          isOver: monitor.isOver(),
        }),
      }),
      []
    );
    return <Paper ref={drop} />;
  };

  const Div = () => <DragDiv />;

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
      <DndProvider backend={HTML5Backend}>
        <Container>
          <ComponentArea>
            <Text name="文本" icon={<FontSizeOutlined />} Component={Div} />
          </ComponentArea>
          <MakeArea>
            <PaperDorp />
          </MakeArea>
          <EditArea></EditArea>
        </Container>
      </DndProvider>
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

const Container = styled.div`
  display: flex;
  height: calc(100vh - 60px);
`;

const ComponentArea = styled.div`
  width: 20vw;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MakeArea = styled.div`
  background-color: #edf2ff;
  padding: 15px;
  width: 56vw;
  height: 100%;
`;

const EditArea = styled.div`
  width: 24vw;
  height: 100%;
`;

const Paper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
