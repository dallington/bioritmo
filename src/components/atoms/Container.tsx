import React from "react";

import styled from "styled-components";

const ContainerWrapper = styled.div`
  padding: 0 50px;
  margin: 0 auto;
  max-width: 1024px;
`;

type TProps = {
  children: React.ReactChild | React.ReactChild[];
};

export default function Container({ children }: TProps) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}
