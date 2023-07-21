import React from 'react';

interface iTitleProps {
  children: string;
  className: string;
}

const Title: React.FC<iTitleProps> = ({ children, className }) => {
  return <h2 className={`${className}`}>{children}</h2>;
};

export default Title;
