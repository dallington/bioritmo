/* eslint-disable react/require-default-props */
import React from "react";
import styled from "styled-components";

type TProps = {
  children: React.ReactChild | React.ReactChild[];
  justifyContent?: string;
  alignItems?: string;
};

const FlexWrapper = styled.div<TProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: ${(props) => props.justifyContent || "start"};
  align-items: ${(props) => props.alignItems || "start"};
`;

function Flex({ children, justifyContent = "", alignItems = "" }: TProps) {
  return (
    <FlexWrapper justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </FlexWrapper>
  );
}

export default Flex;
