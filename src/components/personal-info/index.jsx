import React, { useState } from "react";
import styled from "styled-components";
import { ComponentTitle } from "../component-title";
/* fake Avatar */
import avatar from "../../assets/avatar.png";
import { Input, Form } from "antd";
import { v4 as uuid } from "uuid";

export const PersonalInfo = () => {
  const [baseInfos, setBaseInfos] = useState([
    {
      id: uuid(),
      text: "张三",
      isEditing: true,
    },
    {
      id: uuid(),
      text: "前端开发实习生",
      isEditing: true,
    },
  ]);
  const [detailInfos, setDetailInfos] = useState([
    {
      id: uuid(),
      key: "学历",
      value: "",
      isEditing: true,
    },
    {
      id: uuid(),
      key: "手机",
      value: "",
      isEditing: true,
    },
    {
      id: uuid(),
      key: "邮箱",
      value: "",
      isEditing: true,
    },
  ]);

  const handleBlurBase = (idx) => {
    return (e) => {
      if (e.target.value !== "") {
        setBaseInfos((prev) => {
          let newInfo = [...prev];
          newInfo[idx].isEditing = false;
          newInfo[idx].text = e.target.value;
          return newInfo;
        });
      }
    };
  };

  const handleBlurDetail = (idx) => {
    return (e) => {
      if (e.target.value !== "") {
        setDetailInfos((prev) => {
          let newInfo = [...prev];
          newInfo[idx].isEditing = false;
          newInfo[idx].value = e.target.value;
          return newInfo;
        });
      }
    };
  };

  return (
    <InfoContainer>
      <NameContainer>
        <Name>
          {baseInfos[0].isEditing ? (
            <Input placeholder="姓名" onBlur={handleBlurBase(0)} />
          ) : (
            baseInfos[0].text
          )}
        </Name>
        <Position>
          {baseInfos[1].isEditing ? (
            <Input placeholder="职位" onBlur={handleBlurBase(1)} />
          ) : (
            baseInfos[1].text
          )}
        </Position>
        <div></div>
      </NameContainer>
      <ComponentTitle title={"基本资料"} />
      <MainContainer>
        <Text>
          <Form name="personal-info" size="small">
            {detailInfos.map((detailInfo, index) => {
              return (
                <FormItem label={detailInfo.key} key={detailInfo.id}>
                  {detailInfo.isEditing ? (
                    <Input
                      placeholder={`请输入${detailInfo.key}`}
                      onBlur={handleBlurDetail(index)}
                    />
                  ) : (
                    detailInfo.value
                  )}
                </FormItem>
              );
            })}
          </Form>
        </Text>
        <Avatar src={avatar}></Avatar>
      </MainContainer>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  /* transform: scale(0.5); */
`;
const NameContainer = styled.div`
  display: flex;
  div {
    width: 20%;
  }
  h1 {
    margin: 0;
  }
`;
const Name = styled.h1`
  width: 20%;
  color: #514b6f;
`;
const Position = styled.h1`
  flex: 1;
  text-align: center;
  color: #514b6f;
`;

const MainContainer = styled.div`
  display: flex;
`;
const Text = styled.div`
  flex: 1;
  p {
    margin: 2px;
    label {
      margin-right: 10px;
    }
  }
`;
const FormItem = styled(Form.Item)`
  margin-bottom: 5px;
`;

const Avatar = styled.img`
  width: 60px;
  height: 80px;
  margin: 10px 0 10px 30px;
`;
