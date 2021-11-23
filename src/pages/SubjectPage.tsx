import React from "react";
import styled from "styled-components";
import { ListView } from "../components/common/ListView";
import { categoryFilter, _subcategoryFilter } from "../constants/index";

const SubjectPage: React.FC = () => {

  return (
    <>
      <ListView list={categoryFilter} isSubject={true} />
    </>
  )
}

export { SubjectPage };