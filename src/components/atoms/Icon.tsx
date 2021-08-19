import React from "react";
import styled from "styled-components";

const IconStyled = styled.div<any>`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    object-fit: contain;
    max-width: 100%;
    ${(props) => props.size && `width: ${props.size}`};
  }
  span {
    margin-top: 10px;
    font-size: 16px;
    font-weight: medium;
  }
`;

type TProps = {
  legend: string;
  children: React.ReactChild | React.ReactChild[];
  size: string;
};

export default function Title({
  children,
  legend = "",
  size = "50px",
}: TProps) {
  return (
    <IconStyled size={size}>
      {children}
      {legend && <span>{legend}</span>}
    </IconStyled>
  );
}
