/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import styled from "styled-components";

const ControlLabel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  align-items: center;
  &:last-child {
    border-color: transparent;
  }
  & > span {
    height: 20px;
  }
`;

const Label = styled.label`
  flex: 1;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: ${(props) => props.color || props.theme.colors.grey.light};
`;

type tprops = {
  label: string | React.ReactChild;
  children: React.ReactChild;
  onClick?: (arg: any) => void;
  onChange?: (arg: any) => void;
};

function FormControlLabel({ label, children, ...props }: tprops) {
  return (
    <ControlLabel {...props}>
      {children}
      <Label>{label}</Label>
    </ControlLabel>
  );
}

export default FormControlLabel;
