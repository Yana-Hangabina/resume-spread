import React, { useState} from "react";
import styled from "styled-components";
import './index.css'
import { Input } from 'antd';
const { TextArea } = Input;
const Exercitation=()=>{
    const [titleValue,setTitleValue]=useState("实习经历")
    const [timeValue,setTimeValue]=useState(".2021.09-2021.10")
    const [exercitationValue,setExercitationValue]=useState("实验室官网")
    const [processValue,setProcessValue]=useState("合作完成")
    const [contentValue,setContentValue]=useState("项目内容:")
    const [timeValue1,setTimeValue1]=useState(".2021.09-2021.10")
    const [exercitationValue1,setExercitationValue1]=useState("实验室官网")
    const [processValue1,setProcessValue1]=useState("合作完成")
    const [contentValue1,setContentValue1]=useState("项目内容:")
    const [addressValue,setAddressValue]=useState("项目地址:")
    const [addressValue1,setAddressValue1]=useState("项目地址:")
    const titleInputChange=(e)=>{
        setTitleValue(e.target.value)
    }
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
            <Input 
             style={{
                fontWeight:500,
               fontSize: "18px"
             }}
            onChange={titleInputChange} value={titleValue}  bordered={false} className="titleInput"></Input>
            <Line></Line>
             <ContentTop>
             <Input 
              style={{
                fontWeight:500,
               fontSize: "18px"
             }}
             value={timeValue} onChange={timeValueChange} bordered={false} ></Input>
             <Input
              style={{
                fontWeight:500,
               fontSize: "18px"
             }}
              value={exercitationValue} onChange={exercitationValueChange} bordered={false}></Input>
             <Input 
               style={{
                fontWeight:500,
               fontSize: "18px"
             }}             
             value={processValue}  bordered={false} onChange={processValueChange} ></Input>
             </ContentTop>
             <Content >
                    <TextArea autoSize={{ minRows: 0, maxRows: 12 }}  style={{
                 
                fontWeight:500,
               fontSize: "18px"
             }} value={contentValue} onChange={contentValueChange} bordered={false}>

                     </TextArea>
                     <Input 
                      style={{
                        fontWeight:500,
               fontSize: "18px",
               color:"#6E668C"
                      }}
                     value={addressValue} onChange={addressValueChange} defaultValue="项目地址" bordered={false}></Input>
             </Content>
             {/*  */}
             <ContentTop>
             <Input 
              style={{
                fontWeight:500,
               fontSize: "18px"
             }}
             value={timeValue1} onChange={timeValueChange1} bordered={false} ></Input>
             <Input
              style={{
                fontWeight:500,
               fontSize: "18px"
             }}
              value={exercitationValue1} onChange={exercitationValueChange1} bordered={false}></Input>
             <Input 
               style={{
                fontWeight:500,
               fontSize: "18px"
             }}             
             value={processValue1}  bordered={false} onChange={processValueChange1} ></Input>
             </ContentTop>
             <Content >
                    <TextArea autoSize={{ minRows: 0, maxRows: 12 }}  style={{
                 
                fontWeight:500,
               fontSize: "18px"
             }} value={contentValue1} onChange={contentValueChange1} bordered={false}>

                     </TextArea>
                     <Input value={addressValue1} onChange={addressValueChange1}
                     style={{
                        fontWeight:500,
               fontSize: "18px",
               color:"#6E668C"
                      }}
                       bordered={false}></Input>
             </Content>
        </ContentContainer>
    )
}
const ContentContainer=styled.div`
 display:flex;
 flex-direction:column;
 padding:20px;
`;

const Line=styled.div`
margin: 20px auto;
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

export default Exercitation