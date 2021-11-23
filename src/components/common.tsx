import styled from "styled-components";
import theme from "../styles/theme";

export const MainLayout = styled.main`
  display: flex;
  justify-content: center;
  width : 100vw;
  padding : 75px 15px 0px;
  overflow: scroll;
  box-sizing : border-box;
  font-family: ${props => props.theme.font};
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  position : fixed;
  top : 0;
  width : 100vw;
  height : 60px;
  border-bottom: 1px solid #eee;
  z-index: 100;
  background-color: ${props => props.theme.mono1};
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);
  padding : 0px 20px;
`

export const OutlineLabel__FULL = styled.div`
  border : 1px solid #EBEBEB;
  margin : 20px 20px;
  height : 40px;
  display: flex;
  align-items: center;
  padding-left :10px;
  color : #000;
  box-sizing: border-box;
`
export const Flex = styled.div`
  display : flex;
`;

export const PageChanger = styled.div`
  position: fixed;
  width : 200vw;
  height : 100vh;
  z-index: 110;
  background-color : rgb(135, 135, 135);
  animation: moveleft 0.5s ease-out;
  transform: translateX(0);
  @keyframes moveleft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-200vw);
    }
  }
`;

export const Wrapper = styled.div<{ width: string; color?: string; }>`
  width : ${props => props.width};
  background-color : ${props => !!props.color ? props.color : "rgb(248, 249, 250)"};
`;


export const LNB = styled.aside`
  width : 20%;
  & div.lnb__box {
    border-radius: 5px;
    padding : 24px 32px;
    background-color :#FFF;
    box-shadow: 0 5px 10px 0 transparent;
    border: 1px solid #eee;
  }
  & div.lnb__title {
    font-size: 20px ;
    margin-bottom: 16px;
    font-weight : 600;
  }
  & div {
    margin-bottom: 5px;
    font-weight : 600;
  }
`;

export const RightWing = styled.aside`
  width : 20%;
`;

export const RNB = styled.div`
  position : fixed;
  padding : 10px;
  border-radius: 5px;
  background-color: ${theme.mono1};
  border: 1px solid ${theme.mono2Divider};
  box-sizing: border-box;
`;