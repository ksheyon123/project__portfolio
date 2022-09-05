import React, { useRef, RefObject, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import theme from "src/styles/theme";

const StyledPage = styled.div`
  width : 100vw;
  height : 100vh;
  & > div.container {
    position : relative;
    width : 100%;
    height : 100%;
    margin : 0px auto;
    border-right :1px solid #AAA;
    border-left :1px solid #AAA;
    overflow : hidden;
  }
  & > div.scroll-idx {
      position : fixed;
      top : 0px;
      right : 0px;
    }
`;

const increasing = (prev: number) => prev + 1;
const decreasing = (prev: number) => prev - 1;

const AboutPage: React.FC = () => {

  const divRef = useRef<HTMLDivElement>();
  const [scrollIdx, setScrollIdx] = useState<number>(0);

  const scrollHandler = useCallback((e: any) => {
    const isIncrease = e.deltaY > 0;

    setScrollIdx(isIncrease ? increasing : decreasing);
  }, [scrollIdx]);

  useEffect(() => {
    const { current } = divRef;
    if (current) {
      current.addEventListener("mousewheel", scrollHandler)
      return () => current.removeEventListener("mousewheel", scrollHandler);
    }
  }, [divRef]);

  return (
    <StyledPage ref={divRef as RefObject<HTMLDivElement>}>
      <div className="scroll-idx">{scrollIdx}</div>
      <div className="container">
        <StyledTitle>
          <div className="title-area">
            <span className="title-txt">
              KANG SEO HYEON
            </span>
          </div>
        </StyledTitle>
        {(scrollIdx > 0) &&
          (
            <StyledBGSlideIn>
              <div className="bg-slide" />
              <div className="bg-slide" />
              <div className="bg-slide" />
              <div className="bg-slide" />
              <div className="bg-slide" />
            </StyledBGSlideIn>
          )}
        <StyledFadeIn>

        </StyledFadeIn>
      </div>
    </StyledPage>
  )
}
const StyledTitle = styled.div`
  position: absolute;
  width : 100vw;
  height : 100vh;
  top : 0px;
  z-index : 20;
  & > div.title-area {
    width : 100%;
    height : 100%;
    & > span.title-txt {
      ${theme.h1};
      font-family : "bebasNeue";
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const StyledBGSlideIn = styled.div`
  width : 100%;
  height : 100%;
  & > div.bg-slide {
    position: relative;
    right : -100vw;
    height : calc(100% / 5);
    background-color: #AAA;
    animation: slide-in 1s ease-in;
    animation-fill-mode: forwards;
    &:nth-child(2) {
      animation-delay: 100ms;
    }
    &:nth-child(3) {
      animation-delay: 200ms;
    }
    &:nth-child(4) {
      animation-delay: 300ms;
    }
    &:nth-child(5) {
      animation-delay: 400ms;
    }
  }
  @keyframes slide-in {
    100% {
      transform : translateX(-100vw);
    }
    0% {
      transform : translateX(0px);
    }
  }
`;

const StyledFadeIn = styled.div`
  position: absolute;
`;

export { AboutPage }