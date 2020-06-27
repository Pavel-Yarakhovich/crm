import React, { memo } from "react";
import { CategoryItem } from "../../CategoryItem";
import NpmLogo from "../../../Assets/img/npm.png";
import YarnLogo from "../../../Assets/img/yarn.png";
import * as Styled from "./styled";

export const PackageManagers = memo(() => {
  return (
    <Styled.Container>
      <CategoryItem name="npm" description="Test description" logo={NpmLogo} />
      <CategoryItem name="yarn" description="Test description" logo={YarnLogo} />
    </Styled.Container>
  );
});