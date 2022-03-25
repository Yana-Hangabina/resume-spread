import React, { useState } from "react";
import styled from "styled-components";
import { ComponentTitle } from "../component-title";
import { nanoid } from "nanoid";
import { Input } from "antd";
const { TextArea } = Input;
const Exercitation = () => {
  const [exercitations, setExercitations] = useState([
    {
      id: nanoid(),
      timeValue: "xxxx.xx-xxxx.xx",
      exercitationValue: "项目名",
      processValue: "进度",
      contentValue: "内容",
      addressValue: "地址",
      timeValueEditing: true,
      exercitationValueEditing: true,
      processValueEditing: true,
      contentValueEditing: true,
      addressValueEditing: true,
    },
  ]);
  /* 失去焦点保存 */
  const handleBlurTimeValue = (index) => {
    return (e) => {
      if (e.target.value !== "") {
        setExercitations((prev) => {
          let newInfo = [...prev];
          newInfo[index].timeValueEditing = false;
          newInfo[index].timeValue = e.target.value;
          return newInfo;
        });
      }
    };
  };
  const handleBlurExercitationValue = (index) => {
    return (e) => {
      if (e.target.value !== "") {
        setExercitations((prev) => {
          let newInfo = [...prev];
          newInfo[index].exercitationValueEditing = false;
          newInfo[index].exercitationValue = e.target.value;
          return newInfo;
        });
      }
    };
  };
  const handleBlurProcessValue = (index) => {
    return (e) => {
      if (e.target.value !== "") {
        setExercitations((prev) => {
          let newInfo = [...prev];
          newInfo[index].processValueEditing = false;
          newInfo[index].processValue = e.target.value;
          return newInfo;
        });
      }
    };
  };
  const handleBlurContentValue = (index) => {
    return (e) => {
      if (e.target.value !== "") {
        setExercitations((prev) => {
          let newInfo = [...prev];
          newInfo[index].contentValueEditing = false;
          newInfo[index].contentValue = e.target.value;
          return newInfo;
        });
      }
    };
  };
  const handleBlurAddressValue = (index) => {
    return (e) => {
      if (e.target.value !== "") {
        setExercitations((prev) => {
          let newInfo = [...prev];
          newInfo[index].addressValueEditing = false;
          newInfo[index].addressValue = e.target.value;
          return newInfo;
        });
      }
    };
  };
  const handleClickTimeValue = (index) => {
    return () => {
      setExercitations((prev) => {
        let newInfo = [...prev];
        newInfo[index].timeValueEditing = true;
        return newInfo;
      });
    };
  };
  const handleClickExercitationValue = (index) => {
    return () => {
      setExercitations((prev) => {
        let newInfo = [...prev];
        newInfo[index].exercitationValueEditing = true;
        return newInfo;
      });
    };
  };
  const handleClickProcessValue = (index) => {
    return () => {
      setExercitations((prev) => {
        let newInfo = [...prev];
        newInfo[index].processValueEditing = true;
        return newInfo;
      });
    };
  };
  const handleClickContentValue = (index) => {
    return () => {
      setExercitations((prev) => {
        let newInfo = [...prev];
        newInfo[index].contentValueEditing = true;
        return newInfo;
      });
    };
  };
  const handleClickAddressValue = (index) => {
    return () => {
      setExercitations((prev) => {
        let newInfo = [...prev];
        newInfo[index].addressValueEditing = true;
        return newInfo;
      });
    };
  };

  return (
    <ContentContainer>
      <ComponentTitle title={"项目经历"} />
      {exercitations.map((exercitation, index) => {
        const {
          timeValue,
          exercitationValue,
          processValue,
          contentValue,
          addressValue,
          timeValueEditing,
          exercitationValueEditing,
          processValueEditing,
          contentValueEditing,
          addressValueEditing,
        } = exercitation;
        return (
          <div key={exercitation.id}>
            <ContentTop>
              {timeValueEditing ? (
                <Input
                  placeholder="请输入"
                  style={{
                    fontWeight: 500,
                    fontSize: "18px",
                    maxWidth: '33%',
                    height: '28px'
                  }}
                  value={timeValue}
                  onChange={(e) => {
                    setExercitations((prev) => {
                      let newInfo = [...prev];
                      newInfo[index].timeValue = e.target.value;
                      return newInfo;
                    });
                  }}
                  onBlur={handleBlurTimeValue(index)}
                />
              ) : (
                <h2 onClick={handleClickTimeValue(index)}>{timeValue}</h2>
              )}
              {exercitationValueEditing ? (
                <Input
                  style={{
                    fontWeight: 500,
                    fontSize: "18px",
                    maxWidth: '33%',
                    height: '28px'
                  }}
                  value={exercitationValue}
                  onChange={(e) => {
                    setExercitations((prev) => {
                      let newInfo = [...prev];
                      newInfo[index].exercitationValue = e.target.value;
                      return newInfo;
                    });
                  }}
                  onBlur={handleBlurExercitationValue(index)}
                />
              ) : (
                <h2 onClick={handleClickExercitationValue(index)}>
                  {exercitationValue}
                </h2>
              )}
              {processValueEditing ? (
                <Input
                  style={{
                    fontWeight: 500,
                    fontSize: "18px",
                    maxWidth: '33%',
                    height: '28px'
                  }}
                  value={processValue}
                  onChange={(e) => {
                    setExercitations((prev) => {
                      let newInfo = [...prev];
                      newInfo[index].processValue = e.target.value;
                      return newInfo;
                    });
                  }}
                  onBlur={handleBlurProcessValue(index)}
                />
              ) : (
                <h2 onClick={handleClickProcessValue(index)}>{processValue}</h2>
              )}
            </ContentTop>
            <Content>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#6E668C",
                }}
              >
                项目内容:
              </div>
              {contentValueEditing ? (
                <TextArea
                  autoSize={{ minRows: 0, maxRows: 12 }}
                  value={contentValue}
                  onChange={(e) => {
                    setExercitations((prev) => {
                      let newInfo = [...prev];
                      newInfo[index].contentValue = e.target.value;
                      return newInfo;
                    });
                  }}
                  onBlur={handleBlurContentValue(index)}
                />
              ) : (
                <p
                  style={{
                    width: "100%",
                    wordWrap: "break-word",
                    wordBreak: "break-all",
                    overflow: "hidden",
                  }}
                  onClick={handleClickContentValue(index)}
                >
                  {contentValue}
                </p>
              )}
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#6E668C",
                }}
              >
                项目地址:
              </div>
              {addressValueEditing ? (
                <Input
                  value={addressValue}
                  onChange={(e) => {
                    setExercitations((prev) => {
                      let newInfo = [...prev];
                      newInfo[index].addressValue = e.target.value;
                      return newInfo;
                    });
                  }}
                  onBlur={handleBlurAddressValue(index)}
                />
              ) : (
                <p
                  style={{
                    width: "100%",
                    wordWrap: "break-word",
                    wordBreak: "break-all",
                    overflow: "hidden",
                  }}
                  onClick={handleClickAddressValue(index)}
                >
                  {addressValue}
                </p>
              )}
            </Content>
          </div>
        );
      })}
    </ContentContainer>
  );
};
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
const ContentTop = styled.div`
  display: flex;
  margin: 10px auto;
  width: 100%;
  height: 3vh;
  justify-content: space-between;
`;

export default Exercitation;
