import React from "react";

import styled from "styled-components";

const Divisor = styled.span`
  display: block;
  width: 200px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.grey.dark};
  margin: 60px 0;
`;

export default function Title() {
  return <Divisor />;
}
