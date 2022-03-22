import React from "react";
import { Button } from "antd";
import { TopHeader } from "../../components/topHeader";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { SideLeft } from "../../components/side-left";
import { SideRight } from "../../components/side-right";
import { Card } from "antd";
/* 模拟真实组件 */
const menuItems = [<Card>111</Card>, <Card>222</Card>];
export const MakeResume = () => {
  const navigate = useNavigate();
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
      <MainContainer>
        <SideLeft title={"物料区"} menuItems={menuItems}></SideLeft>
        <MidContent>111</MidContent>
        <SideRight title={"操作区"} render={() => <Card>111</Card>}></SideRight>
      </MainContainer>
    </div>
  );
};

const BtnGroup = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: space-between;
`;

const MainContainer = styled.div`
  height: calc(100vh - 60px);
  background-color: rgb(237, 242, 255);
  display: flex;
`;

const MidContent = styled.div`
  flex: 1;
`;
