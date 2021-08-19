/* eslint-disable react/require-default-props */
import React from "react";

import styled from "styled-components";

type TTextAlign = "center" | "left" | "right" | "justify";

type TPropsText = {
  size?: string;
  color?: string;
  align?: TTextAlign;
};

const TextStyled = styled.p<TPropsText>`
  font-size: ${(props) => props.size || "18px"};
  color: ${(props) => props.color || props.theme.colors.grey.light};
  ${(props) => props.align && `text-align: ${props.align} `}
`;

type TProps = {
  children: React.ReactChild | React.ReactChild[];
};

export default function Text({ children, ...props }: TProps & TPropsText) {
  return <TextStyled {...props}>{children}</TextStyled>;
}
