import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  useLocation
} from "react-router-dom";
import {
  Column,
  Title,
  Indent
} from "../components/index";
import {
  useRecoilValue,
  useRecoilState,
} from "recoil";
import {
  contentArrState,
  contentState
} from "../states/_recoilState"
import {
  contentFilter
} from "../states/_recoilSelector";

const Content = styled.div`
  width : 100%;
  box-sizing: border-box;
  padding : 10px;
`;

const DetailPage: React.FC = () => {
  const { state } = useLocation();
  const [content, setNewContent] = useRecoilState(contentFilter);
  const [onBoarding, setOnBoarding] = useState<boolean>(true);

  const {
    title,
    desc,
    introduction,
    keyword,
    created,
    rated,
    writer
  } = content;

  useEffect(() => {
    setNewContent(state);
    setOnBoarding(false);
  }, [state]);

  if (onBoarding) {
    return (
      <div></div>
    )
  }

  return (
    <Column>
      <Content>
        <Title title={title} />
        <Indent writer={writer} date={created} keyword={keyword} />
        <div>
          introduction
      </div>
        <div>
          Keyword
      </div>
        <div>
          Footer
      </div>
      </Content>
    </Column>
  )
}

export { DetailPage }