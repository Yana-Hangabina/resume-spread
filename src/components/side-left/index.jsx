import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
const { Sider } = Layout;
export const SideLeft = ({ title, menuItems }) => {
  return (
    <div>
      <Sider
        theme="light"
        collapsed={false}
        width={260}
        style={{ boxShadow: "10px 10px 20px #efefef" }}
      >
        <div
          style={{
            display: "flex",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <LeftTitle>{title}</LeftTitle>
          <ComponentMenu >
            {menuItems.map((item, index) => {
              return (
                /* wran:暂时用index做key */
                <ComponentItem key={index}>
                  <div style={{ transform: "scale(0.8)" }}>{item}</div>
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
  background-color: #e0e0e0;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
`;

const ComponentMenu = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const ComponentItem = styled.div`
  border: 1px solid #ccc;
  margin: 2px;
  border-radius: 5px;
`;
