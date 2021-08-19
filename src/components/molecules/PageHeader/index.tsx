/* eslint-disable react/require-default-props */
import React from "react";
import Title from "../../atoms/Title";
import TitleDivisor from "../../atoms/TitleDivisor";

import { PageHeaderWrapper } from "./styles";

import { TPropsChildren } from "../../../@types";

type PropsPageHeader = TPropsChildren & {
  title?: string;
};

function PageHeader({ children, ...props }: PropsPageHeader) {
  const { title } = props;
  return (
    <PageHeaderWrapper>
      {title && <Title>{props.title as string}</Title>}
      {title && <TitleDivisor />}
      {children}
    </PageHeaderWrapper>
  );
}

export default PageHeader;
