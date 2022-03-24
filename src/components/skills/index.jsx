import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ComponentTitle } from "../component-title";
import { v4 as uuid } from "uuid";

const PLACEHOLDER = "人在江湖，须有一技傍身";

const RenderSkills = (props) => {
  const [skillsList, setSkillsList] = useState([]);

  useEffect(() => {
    if (props) {
      props("skills", skillsList);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillsList]);

  if (!props) {
    // 快照
    return (
      <SkillList>
        <List>
          <Input value={PLACEHOLDER} onChange={() => {}} />
        </List>
      </SkillList>
    );
  }

  return (
    <SkillList>
      {skillsList.map((item, index) => {
        if (item.isEditing === false) {
          return (
            <List
              key={item.id}
              onClick={() => {
                setSkillsList((prev) => {
                  let newList = [...prev];
                  newList[index].isEditing = true;
                  return newList;
                });
              }}
            >
              {item.text}
            </List>
          );
        } else {
          return (
            <List key={item.id}>
              <Input
                autoFocus
                onBlur={() => {
                  // 已知问题：点击另一项，会触发blur事件，但是另一项不会被选中
                  setSkillsList((prev) => {
                    let newList = [...prev];
                    newList[index].isEditing = false;
                    return newList;
                  });
                }}
                value={item.text}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    setSkillsList((prev) => {
                      let newList = [...prev];
                      newList[index].isEditing = false;
                      newList.splice(index + 1, 0, {
                        id: uuid(),
                        text: "",
                        isEditing: true,
                      });
                      return newList;
                    });
                  } else if (e.key === "Backspace" && skillsList.length > 1) {
                    if (item.text === "") {
                      setSkillsList((prev) => {
                        let newList = [...prev];
                        newList[index - 1].isEditing = true;
                        newList.splice(index, 1);
                        return newList;
                      });
                    }
                  }
                }}
                onChange={(e) => {
                  setSkillsList((prev) => {
                    let newList = [...prev];
                    newList[index].text = e.target.value;
                    return newList;
                  });
                }}
              ></Input>
            </List>
          );
        }
      })}
    </SkillList>
  );
};

export const Skills = (props) => {
  return (
    <InfoContainer>
      <ComponentTitle title={"个人技能"} />
      <MainContainer>{RenderSkills(props.handleData)}</MainContainer>
    </InfoContainer>
  );
};

const InfoContainer = styled.div``;
const MainContainer = styled.div`
  display: flex;
`;
const SkillList = styled.ul`
  list-style-position: inside;
`;
const List = styled.li`
  list-style-position: inside;
  list-style-type: disc;
  display: list-item;
`;
const Input = styled.input``;
