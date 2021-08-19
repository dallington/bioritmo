/* eslint-disable react/require-default-props */
import React from "react";

import styled from "styled-components";

const FormInputRadio = styled.input`
  opacity: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
`;
const FormInputRadioCustom = styled.span`
  position: relative;
  padding-right: 20px;
  margin-right: 10px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 2px solid ${(props) => props.theme.colors.grey.light};
    border-radius: 100%;
    background: #fff;
  }
  &::after {
    content: "";
    width: 12px;
    height: 12px;
    background: ${(props) => props.theme.colors.yellow};
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &[data-checked="true"]::after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

type TPropss = {
  id?: string;
  name?: string;
  value?: string;
  checked?: string | boolean;
  onChange?: (e: any) => void;
};

export default function FormRadio({ checked, onChange, ...props }: TPropss) {
  return (
    <FormInputRadioCustom data-checked={!!checked}>
      <FormInputRadio
        type="radio"
        onChange={onChange}
        checked={!!checked}
        {...props}
      />
    </FormInputRadioCustom>
  );
}
