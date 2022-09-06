import React, { useRef, RefObject, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import theme from "src/styles/theme";

const StyledPage = styled.div`
  width : auto;
  height : auto;
  & > div.container {
    position : relative;
    width : 100vw;
    height : 100vh;
    margin : 0px auto;
    border-right :1px solid #AAA;
    border-left :1px solid #AAA;
    overflow : scroll;
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

  const mouseWheelHandler = useCallback((e: any) => {
    const isIncrease = e.deltaY > 0;
    setScrollIdx(isIncrease ? increasing : decreasing);
  }, [scrollIdx]);

  const scrollHandler = (e: any) => {
    console.log(e.pageOffsetY);
  }

  useEffect(() => {
    const { current } = divRef;
    if (current) {
      current.addEventListener("mousewheel", mouseWheelHandler);
      current.addEventListener("scroll", scrollHandler);
      return () => {
        current.removeEventListener("mousewheel", mouseWheelHandler);
        current.removeEventListener("scroll", scrollHandler);
      };
    }
  }, [divRef]);

  const classNameBinder = (prefix: string, suffix: string, cond: boolean) => {
    return cond ? !!prefix ? prefix + " " + suffix : suffix : "";
  }

  return (
    <StyledPage ref={divRef as RefObject<HTMLDivElement>}>
      <div className="scroll-idx">{scrollIdx}</div>
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
      {(scrollIdx > 30 && (
        <StyledBanner>
          <div className={classNameBinder("", "removed", scrollIdx > 100)}>
            <span >PORTFOLIO</span>
          </div>
        </StyledBanner>
      ))}
      {(scrollIdx > 100 && (
        <StyleContainer>
          <div className="index-wrapper">
            <div className="index left-side">

            </div>
            <div className="index right-side">

            </div>

          </div>
          <div className="index-wrapper">
            <div className="index left-side">

            </div>
            <div className="index right-side">

            </div>

          </div>
        </StyleContainer>
      ))}
      <StyledFadeIn>

      </StyledFadeIn>
    </StyledPage >
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
  position: relative;
  right : -100vw;
  width : 100vw;
  height : 100vh;
  & > div.bg-slide {
    height : calc(100% / 5);
    background-color: #AAA;
    animation: slide-in 1s ease-in;
    animation-fill-mode: forwards;
    z-index: 15;
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

const StyledBanner = styled.div`
  position: absolute;
  top :0px;
  z-index: 16;
  width : 100%;
  height : 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow : hidden;
  & > div {
    width : 100%;
    height : 100%;
    transition: ease-in 300ms;
    & > span {
     font-size: 80px;
    }
    &.removed {
    transform : translateX(100%);
    }
  }
`;

const StyleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height : 100vh;
  top : -100vh;
  z-index: 17;
  overflow : scroll!important;
  & > div.index-wrapper {
    width: 100%;
    height : 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
      & > div.index {
      width : 300px;
      height : 600px;
      background-color: #FFF;
      &.right-side {
        background-color: transparent;
      }
    }
  }
`;

const StyledFadeIn = styled.div`
  position: absolute;
`;

export { AboutPage }