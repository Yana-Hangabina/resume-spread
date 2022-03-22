import { Modal, Button, Input } from "antd";
import React, { useState } from "react";
import { TopHeader } from "../../components/topHeader";
import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router";
import { DndProvider, useDrop } from "react-dnd";
import Text from "../../components/text";
import {
  FontSizeOutlined,
  FileOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { HTML5Backend } from "react-dnd-html5-backend";
import Editor from "./newResume";

const fs = require("fs");
console.log(fs);

export const MakeResume = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    navigate("/makeresume/resume");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
      <TopHeader />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Modal
                closable={false}
                maskClosable={false}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="确定"
                cancelText="取消"
              >
                <Input
                  placeholder="请输入模板名"
                  allowClear
                  onChange={(e) => setName(e.target.value)}
                />
              </Modal>
              <BtnGroup>
                <DivBtn
                  onClick={() => {
                    showModal();
                  }}
                >
                  <FileOutlined />
                  <div
                    style={{
                      fontSize: 16,
                      margin: "5px 0 0",
                    }}
                  >
                    新建空白简历
                  </div>
                </DivBtn>
                <DivBtn
                  onClick={() => {
                    navigate("/resumetemp");
                  }}
                >
                  <FileDoneOutlined />
                  <div
                    style={{
                      fontSize: 16,
                      margin: "5px 0 0",
                    }}
                  >
                    使用本地模板
                  </div>
                </DivBtn>
              </BtnGroup>
            </>
          }
        ></Route>
        <Route path="/resume" element={<Editor />}></Route>
      </Routes>
    </div>
  );
};

const DivBtn = styled.div`
  margin: 0 30px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  font-weight: 100;
  padding: 15px;
  cursor: pointer;
  :hover {
    color: #1890ff;
  }
`;

const BtnGroup = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #69c0ff;
  height: calc(100vh - 60px);
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
