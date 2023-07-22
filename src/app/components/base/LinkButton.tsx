import React, { ReactNode } from "react";
import Link from "next/link";
import { Arrow } from "../icons";

interface iLinkButtonProps {
  children: ReactNode;
  className?: string;
  href: string;
}

const LinkButton: React.FC<iLinkButtonProps> = ({
  children,
  className,
  href,
}) => {
  return (
    <Link
      className={`inline-flex items-center rounded-full transition-colors duration-200 space-x-4 py-3 pl-7 pr-6 group ${className}`}
      href={href}>
      <span className='text-body-sm leading-4 font-medium'>{children}</span>
      <span className='w-[17px] h-[17px] shrink-0 group-hover:translate-x-2 transition-transform duration-200'>
        <Arrow />
      </span>
    </Link>
  );
};

export default LinkButton;
