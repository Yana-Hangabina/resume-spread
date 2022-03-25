import { SideLeft } from "../../../components/side-left";
// import { SideRight } from "../../../components/side-right";
import PersonalInfo from "../../../components/personal-info";
import Exercitation from "../../../components/exercitation";
import SelfAssessment from "../../../components/self-assessment";
import Skills from "../../../components/skills";
import { Button, Empty, Card, Select } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DeleteTwoTone, SaveTwoTone } from "@ant-design/icons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Test from "../../../components/test";
import { connect } from "react-redux";
import PaperDrop from "../../../components/paper-drop";
import { toPrintPdf } from "../../../util/exportToPdf";
// import { RenderOperating } from "../../../components/render-operating";

// 创建放置区域

const { Option } = Select;
const menuItems = [
  {
    name: "PersonalInfo",
    Component: PersonalInfo,
  },
  { name: "Skills", Component: Skills },
  // { name: "Test", Component: Test },
  { name: "Exercitation", Component: Exercitation },
  {name:"SelfAssessment",Component:SelfAssessment}
];
const Editor = () => {
  const [wh, setWh] = useState({
    width: "595px",
    height: "842px",
  });
  const handleChange = (value) => {
    let arr = value.split("x");
    setWh({
      width: `${arr[0]}px`,
      height: `${arr[1]}px`,
    });
  };

  /* 选择组件 */
  // const selector = useSelector((state) => state.selector);
  const onExport = () => {
    toPrintPdf('个人简历')
  }
  return (
    <MainContainer>
      <DndProvider backend={HTML5Backend}>
        <SideLeft title={"组件区"} menuItems={menuItems} />
        <MidContent>
          <HeaderMenu>
            <div>
              简历尺寸:&nbsp;&nbsp;&nbsp;&nbsp;
              <Select
                defaultValue="A4"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="A4">A4</Option>
                {/* <Option value="450x800">450x800</Option>
                <Option value="450x1000">450x1000</Option>
                <Option value="600x1200">600x1200</Option> */}
              </Select>
            </div>
            <MenuBtnGroup>
              {/* <Button type={"default"}>清空</Button> */}
              <Button type={"primary"} ghost onClick={onExport}>
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
            <PaperDrop menuItems={menuItems} wh={wh} />
          </CanvasContainer>
        </MidContent>
      </DndProvider>
      {/* <SideRight
        title={"操作区"}
        render={() => {
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={"未选择组件"}
          />;
        }}
      ></SideRight> */}
    </MainContainer>
  );
};

export default connect((state) => {
  return state;
})(Editor);

const MainContainer = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  min-width: 1200px;
`;

const MidContent = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const CanvasContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
`;

const HeaderMenu = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 10px 20px #efefef;
  background-color: #fff;
`;

const MenuBtnGroup = styled.div`
  display: flex;
  min-width: 280px;
  justify-content: space-around;
`;
