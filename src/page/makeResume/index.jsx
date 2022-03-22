import React from "react";
import { Button, Empty } from "antd";
import { TopHeader } from "../../components/topHeader";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { SideLeft } from "../../components/side-left";
import { SideRight } from "../../components/side-right";
import { Card, Select } from "antd";
import { DeleteTwoTone, SaveTwoTone } from "@ant-design/icons";
/* 模拟真实组件 */
import { PersonalInfo } from "../../components/personal-info";
import { useState } from "react";
const { Option } = Select;
const menuItems = [
  <PersonalInfo></PersonalInfo>,
  <Card>111</Card>,
  <Card>222</Card>,
];
export const MakeResume = () => {
  const navigate = useNavigate();
  const [wh, setWh] = useState({
    width: "300px",
    height: "500px",
  });
  const handleChange = (value) => {
    let arr = value.split('x');
    setWh({
      width: `${arr[0]}px`,
      height: `${arr[1]}px`
    })
  };
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
        <MidContent>
          <HeaderMenu>
            <div>
              画布尺寸:
              <Select
                defaultValue="600x800"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="300x450">300x450</Option>
                <Option value="300x600">300x600</Option>
                <Option value="400x800">400x800</Option>
              </Select>
            </div>
            <MenuBtnGroup>
              <Button type={"default"}>清空画布</Button>
              <Button type={"primary"} ghost>
                <SaveTwoTone twoToneColor="#42abf2" />
                保存
              </Button>
              <Button danger>
                <DeleteTwoTone twoToneColor="#eb2f96" />
                删除
              </Button>
            </MenuBtnGroup>
          </HeaderMenu>
          <CanvasContainer>
            <Canvas wh={wh}>
              <PersonalInfo></PersonalInfo>
            </Canvas>
          </CanvasContainer>
        </MidContent>
        <SideRight
          title={"操作区"}
          render={() => (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={"未选择组件"}
            />
          )}
        ></SideRight>
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
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const HeaderMenu = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  padding: 0 20px;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 10px 20px #efefef;
`;

const MenuBtnGroup = styled.div`
  display: flex;
  min-width: 280px;
  justify-content: space-around;
`;

const CanvasContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const Canvas = styled.div`
  width: ${({wh}) => (wh.width ? wh.width : "300px")};
  height: ${({wh}) => (wh.height ? wh.height : "500px")};
  /* width: 300px;
  height: 400px; */
  background-color: aqua;
`;
