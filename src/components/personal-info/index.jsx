import React, { useState } from "react";
import styled from "styled-components";
// import { connect } from "react-redux";
import { updateSelectComponent } from "../../redux/action/selector";
import { ComponentTitle } from "../component-title";
/* fake Avatar */
import avatar from "../../assets/avatar.png";
import ImageUpload from "../upload/imgUpload";

import { Input, Form } from "antd";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";

const PersonalInfoShot = () => {
  return (
    <InfoContainer>
      <NameContainer>
        <Name>姓名</Name>
        <Position>职位</Position>
        <div></div>
      </NameContainer>
      <ComponentTitle title={"基本资料"} />
      <MainContainer>
        <Text>
          <Form name="personal-info" size="small">
            <FormItem label={"学历"} key={1001}>
              <span>你的院校</span>
            </FormItem>
            <FormItem label={"手机"} key={1002}>
              <span>手机号码</span>
            </FormItem>
            <FormItem label={"邮箱"} key={1003}>
              <span>xxx@xx.com</span>
            </FormItem>
          </Form>
        </Text>
        <Avatar src={avatar} />
      </MainContainer>
    </InfoContainer>
  );
};

const RenderPersonalInfo = ({ Item }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [baseAvatar, setBaseAvatar] = useState(null);
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
      value: "你的院校",
      isKeyEditing: false,
      isValueEditing: false,
    },
    {
      id: uuid(),
      key: "手机",
      value: "手机号码",
      isKeyEditing: false,
      isValueEditing: false,
    },
    {
      id: uuid(),
      key: "邮箱",
      value: "xxx@xx.com",
      isKeyEditing: false,
      isValueEditing: false,
    },
  ]);
  /* 姓名职位信息的失去焦点保存 */
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
  /* 详细信息键的失去焦点保存 */
  const handleBlurDetailKey = (idx) => {
    return (e) => {
      if (e.target.value !== "") {
        setDetailInfos((prev) => {
          let newInfo = [...prev];
          newInfo[idx].isKeyEditing = false;
          newInfo[idx].key = e.target.value;
          return newInfo;
        });
      }
    };
  };
  /* 详细信息值的失去焦点保存 */
  const handleBlurDetailValue = (idx) => {
    return (e) => {
      if (e.target.value !== "") {
        setDetailInfos((prev) => {
          let newInfo = [...prev];
          newInfo[idx].isValueEditing = false;
          newInfo[idx].value = e.target.value;
          return newInfo;
        });
      }
    };
  };
  /* 姓名职位信息的点击二次编辑 */
  const handleClickBase = (idx) => {
    return () => {
      setBaseInfos((prev) => {
        let newInfo = [...prev];
        newInfo[idx].isEditing = true;
        return newInfo;
      });
    };
  };
  /* 详细信息键的点击二次编辑 */
  const handleClickDetailKey = (idx) => {
    return () => {
      setDetailInfos((prev) => {
        let newInfo = [...prev];
        newInfo[idx].isKeyEditing = true;
        return newInfo;
      });
    };
  };
  /* 详细信息值的点击二次编辑 */
  const handleClickDetailValue = (idx) => {
    return () => {
      setDetailInfos((prev) => {
        let newInfo = [...prev];
        newInfo[idx].isValueEditing = true;
        return newInfo;
      });
    };
  };
  /* 详细信息键的输入与文本状态 */
  const FormItemLabel = (detailInfo, index) => {
    return detailInfo.isKeyEditing ? (
      <Input
        style={{ width: "50px" }}
        placeholder="请输入"
        onChange={(e) => {
          setDetailInfos((prev) => {
            let newInfo = [...prev];
            newInfo[index].key = e.target.value;
            return newInfo;
          });
        }}
        onBlur={handleBlurDetailKey(index)}
        value={detailInfo.key}
      />
    ) : (
      <span onClick={handleClickDetailKey(index)}>{detailInfo.key}</span>
    );
  };

  return (
    <InfoContainer
      onClick={() => {
        dispatch(
          updateSelectComponent({
            currentSettings: Item.$settings,
            currentComponent: Item.component.name,
            currentComponentSelectId: Item.id,
          })
        );
      }}
    >
      <NameContainer>
        <Name onClick={handleClickBase(0)}>
          {baseInfos[0].isEditing ? (
            <Input placeholder="姓名" onBlur={handleBlurBase(0)} />
          ) : (
            baseInfos[0].text
          )}
        </Name>
        <Position onClick={handleClickBase(1)}>
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
                <FormItem
                  label={FormItemLabel(detailInfo, index)}
                  key={detailInfo.id}
                >
                  {detailInfo.isValueEditing ? (
                    <Input
                      style={{ minWidth: "50%" }}
                      value={detailInfo.value}
                      placeholder={`请输入`}
                      onChange={(e) => {
                        setDetailInfos((prev) => {
                          let newInfo = [...prev];
                          newInfo[index].value = e.target.value;
                          return newInfo;
                        });
                      }}
                      onBlur={handleBlurDetailValue(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setDetailInfos((prev) => {
                            let newInfo = [...prev];
                            newInfo.push({
                              id: uuid(),
                              key: "xxx",
                              value: "xxx",
                              isKeyEditing: true,
                              isValueEditing: true,
                            });
                            return newInfo;
                          });
                        } else if (
                          e.key === "Delete" &&
                          detailInfos.length > 1
                        ) {
                          setDetailInfos((prev) => {
                            let newInfo = [...prev];
                            newInfo.splice(index, 1);
                            return newInfo;
                          });
                        }
                      }}
                    />
                  ) : (
                    <span onClick={handleClickDetailValue(index)}>
                      {detailInfo.value}
                    </span>
                  )}
                </FormItem>
              );
            })}
          </Form>
        </Text>
        {!baseAvatar ? (
          <ImageUpload
            accept="image/*"
            multiple={false}
            onAfterChange={(files) => {
              setBaseAvatar(files[0].base64URL);
            }}
          />
        ) : (
          <AvatarWrapper>
            <Avatar src={baseAvatar} />
            <Mask className="mask" onClick={() => setBaseAvatar(null)}>
              更换
            </Mask>
          </AvatarWrapper>
        )}
      </MainContainer>
    </InfoContainer>
  );
};

const PersonalInfo = ({ isShot, id }) => {
  const shotSetting = [
    {
      id: 1,
      component: PersonalInfoShot,
      $settings: {
        style: {
          color: "#1890ff",
        },
        children: "",
      },
    },
  ];

  const [settings, setSettings] = useState([
    {
      id: 1,
      component: RenderPersonalInfo,
      $settings: {
        style: {
          color: "#1890ff",
        },
      },
    },
  ]);

  if (isShot) {
    return shotSetting.map((Item, index) => {
      return <Item.component key={uuid()} {...Item.$settings} />;
    });
  }

  return settings.map((Item, index) => {
    return (
      // eslint-disable-next-line react/jsx-pascal-case
      <Item.component Item={Item} key={uuid()} {...Item.$settings} />
    );
  });
};

export default PersonalInfo;

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

const AvatarWrapper = styled.div`
  position: relative;
  &:hover {
    .mask {
      display: block;
    }
  }
`;

const Avatar = styled.img`
  width: 84px;
  height: 102px;
  margin: 10px 0 10px 30px;
`;

const Mask = styled.div`
  position: absolute;
  z-index: 999;
  text-align: center;
  line-height: 102px;
  color: #fff;
  top: 10px;
  left: 30px;
  width: 84px;
  height: 102px;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
`;
