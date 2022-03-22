import React from "react";
import styled from "styled-components";
import { Menu, Layout, Card } from "antd";
const { Sider } = Layout;
export const SideLeft = ({ title, menuItems }) => {
  return (
    <div>
      <Sider collapsed={false} width={260} style={{boxShadow:'10px 10px 20px #efefef'}}>
        <div
          style={{
            display: "flex",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <LeftTitle>{title}</LeftTitle>
          <ComponentMenu theme="light" mode="inline">
            {menuItems.map((item, index) => {
              return (
                /* wran:暂时用index做key */
                <ComponentItem key={index}>
                  <Card>{item}</Card>
                </ComponentItem>
              );
            })}
          </ComponentMenu>
        </div>
      </Sider>
    </div>
  );
};

const LeftTitle = styled.div`
  min-height: 60px;
  background-color: #ccc;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
`;

const ComponentMenu = styled(Menu)`
  height: 100%;
  overflow-y: auto;
`;

const ComponentItem = styled(Menu.Item)`
  min-height: 100px;
`;
