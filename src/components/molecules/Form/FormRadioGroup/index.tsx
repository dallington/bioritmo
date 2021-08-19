/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
import React from "react";

import styled from "styled-components";

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

type tprops = {
  "aria-label"?: string;
  children: React.ReactChild | React.ReactChild[];
  initialValue?: string;
  onChange?: (arg: any) => void;
};

function FormRadioGroup({ children, ...props }: tprops) {
  return (
    <RadioGroup {...props} className="radiogrop">
      {children}
    </RadioGroup>
  );
}

export default FormRadioGroup;
