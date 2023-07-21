import React, { ReactNode } from 'react';

interface iButtonProps {
  key?: number;
  children: ReactNode;
  onClick?: () => void;
  className: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<iButtonProps> = ({
  children,
  onClick,
  className,
  type,
  key,
}) => {
  return (
    <button
      className={`flex items-center text-white rounded-full ${className}`}
      onClick={onClick}
      type={type}
      key={key}
    >
      {children}
    </button>
  );
};

export default Button;
