import React from 'react';
import { SpinnerBounce, SpinBox } from './SpinnerStyled';

export const Spinner = ({ theme }) => {
  return (
    <SpinBox>
      <SpinnerBounce theme={theme}>
        <div class="sk-bounce-dot"></div>
        <div class="sk-bounce-dot"></div>
      </SpinnerBounce>
    </SpinBox>
  );
};
