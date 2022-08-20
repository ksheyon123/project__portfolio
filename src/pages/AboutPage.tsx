import React, { useRef, RefObject, useEffect, useState, useCallback } from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  width : 100vw;
  height : 100vh;
  & > div.container {
    width : 1208px;
    height : 100vh;
    margin : 0px auto;
    border-right :1px solid #AAA;
    border-left :1px solid #AAA;
    overflow : hidden;
    
  }
  & >div.scroll-idx {
      position : fixed;
      top : 0px;
      right : 0px;
    }
`;

const AboutPage: React.FC = () => {

  const divRef = useRef<HTMLDivElement>();
  const [scrollIdx, setScrollIdx] = useState<number>(0);

  const scrollHandler = useCallback((e: any) => {
    if (scrollIdx < 0) return;
    setScrollIdx(e.deltaY > 0 ? prev => prev + 1 : prev => prev - 1);
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
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div><div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </div>
    </StyledPage>
  )
}

export { AboutPage }