import React, { ReactNode } from 'react';
import Link from 'next/link';

interface iLinkButtonProps {
  key?: number;
  children: ReactNode;
  className: string;
  href: string;
}

const LinkButton: React.FC<iLinkButtonProps> = ({
  children,
  className,
  key,
  href,
}) => {
  return (
    <Link
      className={`flex items-center text-white rounded-full transition-all duration-200 ${className}`}
      key={key}
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
