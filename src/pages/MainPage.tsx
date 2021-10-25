import React from "react";
import styled from "styled-components";
import {
  useHistory
} from "react-router-dom";
import {
  useRecoilState
} from "recoil";
import {
  pageTransition
} from "../states/GlobalState";
import { OutlineLabel__FULL } from "../components/common";
import { ViewMore } from "../components/common/ViewMore";

const Wrapper = styled.div`
  width : 60%;
`;

const Aside = styled.aside`
  width : 200px;
`;

const Section = styled.section`
  color : #EBEBEB;
  margin: 20px;
  border : 1px solid #EBEBEB;
  box-sizing: border-box;
`;


const MainPage: React.FC = () => {
  const history = useHistory();
  const [isPageChanged, setIsPageChanged] = useRecoilState(pageTransition);

  const goTo = () => {
    setIsPageChanged(!isPageChanged);

    history.push("/lab");
    setTimeout(() => {
      setIsPageChanged(false);
    }, 500);
  }

  return (
    <>
      <Wrapper>
        <Section>
          <div>
            My Side Rendering
          </div>
          <ViewMore />
        </Section>
        <OutlineLabel__FULL>
          Go To Project
        </OutlineLabel__FULL>
        <OutlineLabel__FULL>
          Go To History
        </OutlineLabel__FULL>
        <OutlineLabel__FULL onClick={() => goTo()}>
          Laboratory
        </OutlineLabel__FULL>
      </Wrapper>
      <Aside>

      </Aside>
    </>
  )
}

export { MainPage }