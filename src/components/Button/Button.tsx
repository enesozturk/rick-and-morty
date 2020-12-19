import React, { FunctionComponent } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
};

const Button: FunctionComponent<ButtonProps> = ({ variant }: ButtonProps) => {
  return <button className={`button ${variant}`}>Button</button>;
};

export default Button;
