import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
  display: flex;
`;

export const SMain = styled.main`
  padding: calc(${v.smSpacing} * 4);

  h1 {
    font-size: 14px;
  }
  .data-hora {
    font-weight: bold;
    text-align: end;
  }
`;
