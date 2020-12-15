import React, { FunctionComponent } from 'react';

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({ primary, secondary }: ButtonProps) => {
  return <button>Button</button>;
};

export default Button;
