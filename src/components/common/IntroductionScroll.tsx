import React, { useEffect, useState, useRef, RefObject } from "react";
import styled from "styled-components";

const Strings = [
  "안녕하세요!!\n",
  "주니어 개발자의 놀이터에 오신 것을 환영합니다. \n",
  "저는 강서현이라고 합니다. \n",
  "이 웹페이지는 프로젝트 \n",
  "개인적인 학습 \n",
  "그리고 상념을 모아둔 곳입니다."
]

const IntroductionScroll: React.FC = () => {
  const [scroll, setScroll] = useState<number>(0);
  const divRef = useRef<any>();
  useEffect(() => {
    window.addEventListener("wheel", (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setScroll(el => el + 5);
      } else {
        setScroll(el => el - 5);
      }
    });
  }, []);

  const View = styled.div<{ scrollTo: number }>`
    position : fixed;
    width : 100vw;
    height : 100vh;
    z-index: 120;
    background-color: #EBEBEB;
    ${props => {
      if (props.scrollTo > 700) {
        return `
        transform : translateY(-${props.scrollTo - 700 + 20 + "px"})
      `
      }
      if (Math.floor(props.scrollTo / 100) > 40) {
        return `
          display : none;
        `
      }
    }}
  ` ;
  // 
  console.log(scroll)

  return (
    <View scrollTo={scroll} ref={divRef as RefObject<HTMLDivElement>}>
      {
        Math.floor(scroll / 100) > 0 && (Strings[0])
      }
      {
        Math.floor(scroll / 100) > 1 && (Strings[1])
      }
      {
        Math.floor(scroll / 100) > 2 && (Strings[2])
      }
      {
        Math.floor(scroll / 100) > 3 && (Strings[3])
      }
      {
        Math.floor(scroll / 100) > 4 && (Strings[4])
      }
      {
        Math.floor(scroll / 100) > 5 && (Strings[5])
      }
    </View>
  )
}

export { IntroductionScroll };