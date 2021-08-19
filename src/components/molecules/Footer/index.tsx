import React from "react";
import styled from "styled-components";
import Container from "../../atoms/Container";
import Logo from "../../atoms/Logo";
import Text from "../../atoms/Text";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 30px;
  margin-top: 60px;
  background: #000;
`;

function MainFooter() {
  return (
    <Footer>
      <Logo width={150} />
      <Text>Todos os direitos reservados - 2021 </Text>
    </Footer>
  );
}

export default MainFooter;
