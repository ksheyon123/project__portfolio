import React, { useEffect } from "react";
import {
  useLocation
} from "react-router-dom";
import {
  Column
} from "../components/common/Column";
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

const DetailPage: React.FC = () => {
  const { state } = useLocation();
  const [content, setNewContent] = useRecoilState(contentFilter);
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
  }, [state]);

  return (
    <Column>
      <div>
        {title}
      </div>
      <div>
        {created}
      </div>
      <div>
        writer
      </div>
      <div>
        introduction
      </div>
      <div>
        Keyword
      </div>
      <div>
        Footer
      </div>
    </Column>
  )
}

export { DetailPage }