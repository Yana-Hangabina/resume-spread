import React, { useState} from "react";
import styled from "styled-components";
import { Input } from 'antd';
import { nanoid } from "nanoid";
import { connect, useDispatch } from "react-redux";
import { updateComponentSettings,appendSettings} from "../../redux/action/tree";

const { TextArea } = Text;

const Div = (props) => <div {...props}>点击添加一段文字</div>;

const Text = (props) => {
  let $settings = {};
  const [state, setState] = useState({
    isEditing: false,
    text: "",
  });

  const { isEditing, text } = state;
  const { dispatch, fid, cid, tree } = props;
  let $this = tree.filter((item) => item.cid === cid)[0];
  $settings = $this.settings.filter((item) => item.fid === fid)[0].$settings;
  const { $children, style } = $settings;

  if (isEditing) {
    return (
      <Input
        autoFocus
        style={style}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(
              appendSettings({
                cid,
                append: {
                  name: "Text",
                  fid: nanoid(),
                  $settings: {
                    style: { color: "#1890ff" },
                    $children: "",
                  },
                },
              })
            );
          }
        }}
        onBlur={() => {
          setState({
            isEditing: false,
            text,
          });
          dispatch(
            updateComponentSettings({
              cid,
              fid,
              $settings: {
                style,
                $children: text,
              },
            })
          );
        }}
        onChange={(e) => {
          setState({
            isEditing,
            text: e.target.value,
          });
        }}
      />
    );
  }
  return (
    <div
      onClick={() => {
        setState({
          isEditing: true,
          text: $children,
        });
      }}
      style={style}
    >
      {$children || "点击添加一段文字"}
    </div>
  );
};

const fragmentComponent = [{ name: "Text", Component: Text }];

const SwitchComponent = (name) => {
  return fragmentComponent.filter((item) => item.name === name)[0];
};



const Exercitation=({ isShot, cid, settings, $tree })=>{
  const dispatch = useDispatch();
  const { tree } = $tree;
  const shotSetting = [
    {
      id: 1,
      component: Div,
      $settings: {
        style: {
          color: "#1890ff",
        },
        $children: "点击添加一行文字",
      },
    },
  ];
    const Shout=()=>{
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
          <Component
            fid={Item.fid}
            tree={tree}
            key={nanoid()}
            dispatch={dispatch}
            cid={cid}
          />
        );
      });
    }
    const [timeValue,setTimeValue]=useState("实习时间")
    const [exercitationValue,setExercitationValue]=useState("实习地点")
    const [processValue,setProcessValue]=useState("项目情况")
    const [contentValue,setContentValue]=useState("项目内容:")
    const [timeValue1,setTimeValue1]=useState("实习时间")
    const [exercitationValue1,setExercitationValue1]=useState("实习地点")
    const [processValue1,setProcessValue1]=useState("项目情况")
    const [contentValue1,setContentValue1]=useState("项目内容:")
    const [addressValue,setAddressValue]=useState("项目地址:")
    const [addressValue1,setAddressValue1]=useState("项目地址:")
    const timeValueChange=(e)=>{
        setTimeValue(e.target.value)
    }
    const exercitationValueChange=(e)=>{
        setExercitationValue(e.target.value)
    }
    const processValueChange=(e)=>{
        setProcessValue(e.target.value)
    }
    const contentValueChange=(e)=>{
        setContentValue(e.target.value)
    }
    const timeValueChange1=(e)=>{
        setTimeValue1(e.target.value)
    }
    const exercitationValueChange1=(e)=>{
        setExercitationValue1(e.target.value)
    }
    const processValueChange1=(e)=>{
        setProcessValue1(e.target.value)
    }
    const contentValueChange1=(e)=>{
        setContentValue1(e.target.value)
    }
    const addressValueChange=(e)=>{
        setAddressValue(e.target.value)
    }
    const addressValueChange1=(e)=>{
        setAddressValue1(e.target.value)
    }
    
    return(
        <ContentContainer>
            <div 
             style={{
                fontWeight:500,
               fontSize: "21px",
               color: "#6E668C"
             }}
            >实习经历</div>
            <Line></Line>
             <ContentTop>
             <Shout 
              style={{
                fontWeight:500,
               fontSize: "14px"
             }}
             value={timeValue} onChange={timeValueChange} bordered={false} ></Shout>
             <Shout
              style={{
                fontWeight:500,
               fontSize: "14px"
             }}
              value={exercitationValue} onChange={exercitationValueChange} bordered={false}></Shout>
             <Shout 
               style={{
                fontWeight:500,
               fontSize: "14px"
             }}             
             value={processValue}  bordered={false} onChange={processValueChange} ></Shout>
             </ContentTop>
             <Content >
                    <TextArea autoSize={{ minRows: 0, maxRows: 12 }}  style={{
                 
                fontWeight:500,
               fontSize: "14px"
             }} value={contentValue} onChange={contentValueChange} bordered={false}>

                     </TextArea>
                     <Shout 
                      style={{
                        fontWeight:500,
               fontSize: "14px",
               color:"#6E668C"
                      }}
                     value={addressValue} onChange={addressValueChange} defaultValue="项目地址" bordered={false}></Shout>
             </Content>
             {/*  */}
             <ContentTop>
             <Shout 
              style={{
                fontWeight:500,
               fontSize: "14px"
             }}
             value={timeValue1} onChange={timeValueChange1} bordered={false} ></Shout>
             <Shout
              style={{
                fontWeight:500,
               fontSize: "14px"
             }}
              value={exercitationValue1} onChange={exercitationValueChange1} bordered={false}></Shout>
             <Shout 
               style={{
                fontWeight:500,
               fontSize: "14px"
             }}             
             value={processValue1}  bordered={false} onChange={processValueChange1} ></Shout>
             </ContentTop>
             <Content >
                    <TextArea autoSize={{ minRows: 0, maxRows: 12 }}  style={{
                 
                fontWeight:500,
               fontSize: "14px"
             }} value={contentValue1} onChange={contentValueChange1} bordered={false}>

                     </TextArea>
                     <Shout value={addressValue1} onChange={addressValueChange1}
                     style={{
                        fontWeight:500,
               fontSize: "14px",
               color:"#6E668C"
                      }}
                       bordered={false}></Shout>
             </Content>
        </ContentContainer>
    )
}
const ContentContainer=styled.div`

 display:flex;
 flex-direction:column;
`;

const Line=styled.div`
margin: 15px auto;
height: 4.5px;
width:98.5%;
background-color:#A7A9B6;
`
const Content=styled.div`
margin: 5px auto;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
align-items: center ;
`
const ContentTop=styled.div`
display: flex;
margin: 40px auto 0px;
width:100%;
height: 3vh;
justify-content: space-evenly;

`

export default connect((state) => {
  return {
    $tree: state.tree,
  };
})(Exercitation); 