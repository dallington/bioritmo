/* eslint-disable react/require-default-props */
import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/logo.svg";

const LogoWrapper = styled.div`
  position: relative;
  img {
    max-width: 100%;
  }
`;

type TProps = {
  width?: number;
  height?: number;
  unit?: string;
};

function PageHeader({ width = 360, ...props }: TProps) {
  const setSize = (value: number): string => {
    return `${value}`;
  };

  return (
    <LogoWrapper>
      <img
        src={Logo}
        alt="Logo SmartFit"
        width={setSize(width)}
        {...(props.height && { height: setSize(props.height as number) })}
      />
    </LogoWrapper>
  );
}

export default PageHeader;
