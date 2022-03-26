import React, { useState } from "react";
import styled from "styled-components";
import { ComponentTitle } from "../component-title";
import { nanoid } from "nanoid";
import { Input,Form } from "antd";
import { updateComponentSettings } from "../../redux/action/tree";
import { connect, useDispatch } from "react-redux";

const { TextArea } = Input;
const HShot=()=>{
    return (
        <InfoContainer>
              <ComponentTitle title={"项目经历"}></ComponentTitle>
             <TopContainer>
                 <div>xxxx.xx-xxxx.xx</div>
                 <div>项目名</div>
                 <div>进度</div>
             </TopContainer>
             <Title>项目内容:</Title>
            <TextAreaContainer><TextArea defaultValue={"内容"}></TextArea></TextAreaContainer> 
             <Title>项目地址:</Title>
             <TextAreaContainer>  <TextArea defaultValue={"地址"}></TextArea></TextAreaContainer> 
        </InfoContainer>
      );
}
const RenderH=(props)=>{
  const { dispatch, fid, cid, tree } = props;
  let $this = tree.filter((item) => item.cid === cid)[0];
  let $settings = $this.settings.filter((item) => item.fid === fid)[0]
    .$settings;
  const { $children, style } = $settings;
  const [topMessage,setTopMessage]=useState($children[0])
  const [content,setContent]=useState($children[1])
  const [address,setAddress]=useState($children[2])
  return (
    <>
    
             <TopContainer   onBlur={() => {
        dispatch(
          updateComponentSettings({
            cid,
            fid,
            $settings: {
              style,
              $children: [topMessage,content,address],
            },
          })
        );
      }} >
             <Time>
               {
                 topMessage[0].isEditing?(
                  <Input placeholder="时间"  />
                 ):(
                  topMessage[0].text
                 )
               }
             </Time>
             <Name>
             {
                 topMessage[1].isEditing?(
                  <Input placeholder="名称"  />
                 ):(
                  topMessage[1].text
                 )
               }
             </Name>
             <Process>
             {
                 topMessage[2].isEditing?(
                  <Input placeholder="进程"  />
                 ):(
                  topMessage[2].text
                 )
               }
             </Process>
             </TopContainer>
             <Title>项目内容:</Title>
            <TextAreaContainer 
              onBlur={() => {
        dispatch(
          updateComponentSettings({
            cid,
            fid,
            $settings: {
              style,
              $children: [topMessage,content,address],
            },
          })
        );
      }}>
         {
          content.isEditing ?(
            <TextArea
          autoFocus
          rows={4}
          cols={100}
          style={style}
          value={content.text}
          placeholder="请输入自我评价"
          onChange={(e) => {
            setContent((prev) => {
              let newList = { ...prev };
              newList.text = e.target.value;
              return newList;
            });
          }}
          onBlur={() => {
            setContent((prev) => {
              let newList = { ...prev };
              newList.isEditing = false;
              return newList;
            });
          }}
        />
          ):(
            <List
          key={content.sid}
          onClick={() => {
            setContent((prev) => {
              let newList = { ...prev };
              newList.isEditing = true;
              return newList;
            });
            dispatch(
              updateComponentSettings({
                cid,
                fid,
                $settings: {
                  style,
                  $children: [topMessage,content,address],
                },
              })
            );
          }}
          style={style}
        >
          {content.text}
        </List>
          )
         }


            </TextAreaContainer>
             <Title>项目地址:</Title>
           <TextAreaContainer
             onBlur={() => {
        dispatch(
          updateComponentSettings({
            cid,
            fid,
            $settings: {
              style,
              $children: [topMessage,content,address],
            },
          })
        );
      }}>
 {
  address.isEditing ?(
            <TextArea
          autoFocus
          rows={4}
          cols={100}
          style={style}
          value={address.text}
          placeholder="请输入自我评价"
          onChange={(e) => {
            setAddress((prev) => {
              let newList = { ...prev };
              newList.text = e.target.value;
              return newList;
            });
          }}
          onBlur={() => {
            setAddress((prev) => {
              let newList = { ...prev };
              newList.isEditing = false;
              return newList;
            });
          }}
        />
          ):(
            <List
          key={address.sid}
          onClick={() => {
            setAddress((prev) => {
              let newList = { ...prev };
              newList.isEditing = true;
              return newList;
            });
            dispatch(
              updateComponentSettings({
                cid,
                fid,
                $settings: {
                  style,
                  $children: [topMessage,content,address],
                },
              })
            );
          }}
          style={style}
        >
          {address.text}
        </List>
          )
         }

           </TextAreaContainer>
  
    </>
  )
}
const fragmentComponent = [
  { name: "RenderH", Component: RenderH },
];

const SwitchComponent = (name) => {
  return fragmentComponent.filter((item) => item.name === name)[0];
};
function H({ isShot, cid, $tree }) {
  const dispatch = useDispatch();
  const { tree } = $tree;

  const shotSetting = [
    {
      id: 1,
      component: HShot,
      $settings: {},
    },
  ];

  if (isShot) {
    return shotSetting.map((Item, index) => {
      return <Item.component key={nanoid()} {...Item.$settings} />;
    });
  }

  let settings = tree.filter((item) => item.cid === cid)[0].settings;

  console.log("@", settings);

  return settings.map((Item) => {
    const { Component } = SwitchComponent(Item.name);
    return (   
      <InfoContainer  key={nanoid()}>
       <ComponentTitle title={"项目经历"}></ComponentTitle>
          <Component
            fid={Item.fid}
            tree={tree}
            key={nanoid()}
            dispatch={dispatch}
            cid={cid}
          />
 </InfoContainer>
    );
  });
}

const InfoContainer = styled.div`
  /* transform: scale(0.5); */
`;
const TextAreaContainer=styled.div`
     
`
const Title=styled.div`
    font-weight: 500;
    font-size: 18px;
    color: rgb(110, 102, 140); 
    margin-top: 10px;
`
const Time=styled.h1`
 width: 20%;
  color: #514b6f;
  `
  const Name=styled.h1`
   width: 20%;
  color: #514b6f;
  `
  const Process=styled.h1`
   width: 20%;
  color: #514b6f;
  `
const TopContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  padding: 10px 0;
  font-weight: 500;
`;



const List = styled.div`
  min-width: 200px;
  word-wrap: "break-word";
  word-break: "break-all";
  overflow: "hidden";
`;


export default connect((state) => {
  return {
    $tree: state.tree,
  };
})(H);