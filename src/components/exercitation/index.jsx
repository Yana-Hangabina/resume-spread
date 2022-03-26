import React, { useState } from "react";
import styled from "styled-components";
import { ComponentTitle } from "../component-title";
import { nanoid } from "nanoid";
import { Input } from "antd";
import { updateComponentSettings } from "../../redux/action/tree";
import { connect, useDispatch } from "react-redux";
const { TextArea } = Input;
const ExercitationShot = () => {
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
                    fontSize: "12px",
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

const RenderExercitationShot=(props)=>{
  const { dispatch, fid, cid, tree } = props;
  let $this = tree.filter((item) => item.cid === cid)[0];
  let $settings = $this.settings.filter((item) => item.fid === fid)[0]
    .$settings;
  const { $children, style } = $settings;
  const [timeValue,setTimeValue]=useState($children[0])
  const [exercitationValue,setExercitationValue]=useState($children[1])
  const [processValue,setProcessValue]=useState($children[2])
  const [contentValue,setContentValue]=useState($children[3])
  const [addressValue,setAddressValue]=useState($children[4])
  const [exercitations, setExercitations] = useState([
    {
      id: nanoid(),
      timeValue: $children[0],
      exercitationValue: $children[1],
      processValue: $children[2],
      contentValue: $children[3],
      addressValue: $children[4],
      timeValueEditing: true,
      exercitationValueEditing: true,
      processValueEditing: true,
      contentValueEditing: true,
      addressValueEditing: true,
    },
  ]);
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
  }
  return (
    <>
    <ContentContainer
      onBlur={() => {
          dispatch(
            updateComponentSettings({
              cid,
              fid,
              $settings: {
                style,
                $children: [timeValue, exercitationValue, processValue,contentValue,addressValue],
              },
            })
          );
        }}>
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
            <ContentTop   onBlur={() => {
          dispatch(
            updateComponentSettings({
              cid,
              fid,
              $settings: {
                style,
                $children: [timeValue, exercitationValue, processValue,contentValue,addressValue],
              },
            })
          );
        }}>
              {timeValueEditing ? (
                <Input
                  placeholder="请输入"
                  style={{
                    fontWeight: 500,
                    fontSize: "12px",
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
            <Content   onBlur={() => {
          dispatch(
            updateComponentSettings({
              cid,
              fid,
              $settings: {
                style,
                $children: [timeValue, exercitationValue, processValue,contentValue,addressValue],
              },
            })
          );
        }}>
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
    </>
  );
}

const fragmentComponent = [
  { name: "RenderExercitationShot", Component: RenderExercitationShot },
];
const SwitchComponent = (name) => {
  return fragmentComponent.filter((item) => item.name === name)[0];
};
const   Exercitation=({ isShot, cid, $tree })=>{
  const dispatch = useDispatch();
  const { tree } = $tree;

  const shotSetting = [
    {
      id: nanoid(),
      component: ExercitationShot,
      $settings: {},
    },
  ];
  if (isShot) {
    return shotSetting.map((Item) => {
      return <Item.component key={nanoid()} {...Item.$settings} />;
    });
  }

  let settings = tree.filter((item) => item.cid === cid)[0].settings;

  return settings.map((Item) => {
    const { Component } = SwitchComponent(Item.name);
    return (

        <Component key={nanoid()} fid={Item.fid} tree={tree} dispatch={dispatch} cid={cid} />
    );
  });
}
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

export default connect((state) => {
  return {
    $tree: state.tree,
  };
})(Exercitation)
