import styled from "styled-components";

export const MainLayout = styled.main`
  display: flex;
  justify-content: center;
  width : 100vw;
  height : calc(100vh - 60px);
  padding-top : 60px;
  overflow: auto;
  box-sizing : "border-box";
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  position : fixed;
  top : 0;
  width : 100vw;
  height : 60px;
  border-bottom: 2px solid #EBEBEB;
  z-index: 100;
  background-color: rgb(34, 34, 34);
  padding : 0px 20px;
`

export const OutlineLabel__FULL = styled.div`
  border : 1px solid #EBEBEB;
  margin : 20px 20px;
  height : 40px;
  display: flex;
  align-items: center;
  padding-left :10px;
  color : #fff;
  box-sizing: border-box;
`

export const PageChanger = styled.div`
  position: fixed;
  width : 100vw;
  height : 100vh;
  z-index: 110;
  background-color : rgb(135, 135, 135);

`