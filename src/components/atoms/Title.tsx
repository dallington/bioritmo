import React from "react";

import styled from "styled-components";

const TitleStyled = styled.h1`
  width: 15ch;
  max-width: 100%;
  font-size: 45px;
  text-transform: uppercase;
  font-weight: 800;
  color: ${(props) => props.theme.colors.grey.dark || "#000"};
`;

type TProps = {
  children: React.ReactChild | React.ReactChild[];
};

export default function Title({ children }: TProps) {
  return <TitleStyled>{children}</TitleStyled>;
}
