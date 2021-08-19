import React from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 60px;
  background: #000;
`;

function PageHeader() {
  return (
    <Header>
      <Logo />
    </Header>
  );
}

export default PageHeader;
