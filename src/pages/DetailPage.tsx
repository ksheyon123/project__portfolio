import React from "react";
import {
  useLocation
} from "react-router-dom";
import {
  Column
} from "../components/common/Column";
import {
  useRecoilValue
} from "recoil";
import {
  contentArrState
} from "../states/_recoilState"

const DetailPage: React.FC = () => {
  const { state } = useLocation();

  return (
    <Column>
      <div>
        Title
      </div>
      <div>
        created
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