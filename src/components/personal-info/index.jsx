import React from 'react'
import styled from 'styled-components'
import {ComponentTitle} from '../component-title'
/* fake Avatar */
import avatar from '../../assets/avatar.png'

export const PersonalInfo = () => {
  return (
    <InfoContainer>
      <ComponentTitle title={'个人信息'} />
      <MainContainer>
        <Text>
          <p><label htmlFor="">学历:</label></p>
          <p><label htmlFor="">手机:</label></p>
          <p><label htmlFor="">邮箱:</label></p>
          <p><label htmlFor="">github:</label></p>
          <p><label htmlFor="">博客:</label></p>
        </Text>
        <Avatar src={avatar}></Avatar>
      </MainContainer>
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
  /* transform: scale(0.5); */
`
const MainContainer = styled.div`
  display: flex;
`
const Text = styled.div`
  flex:1;
  p{
    margin: 2px;
  }
`
const Avatar = styled.img`
  width: 60px;
  height: 80px;
`
