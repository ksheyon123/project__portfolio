import React, { useState } from "react";
import styled from "styled-components";
import dropdown__b from "../../assets/icon-drop-b@2x.png";
import dropdown__u from "../../assets/icon-drop-u@2x.png";

interface Props {
  content?: string;
}

const ViewMore: React.FC<Props> = (props) => {
  const { content } = props;

  const [toggle, setToggle] = useState<boolean>(false);

  const ViewMoreStyled = styled.div`
  text-align: center;
  line-height: 25px;
  width : 100%;
  height : ${toggle ? "" : "25px"};
  padding-bottom : 10px;
  background : url(${toggle ? dropdown__u : dropdown__b}) bottom 0px center no-repeat rgb(135, 135, 135);
  background-size: 15px 10px;
`
  return (
    <ViewMoreStyled onClick={() => setToggle(!toggle)}>
      ViewMore
      {
        toggle && (
          <div>
            asdfasdfasdf<br />
            asdfasdfasdf<br />
            asdfasdfasdf<br />
            asdfasdfasdf<br />
            asdfasdfasdf<br />
            asdfasdfasdf<br />
            asdfasdfasdf<br />
            asdfasdfasdf<br />
          </div>
        )
      }

    </ViewMoreStyled>
  )
}

export { ViewMore };