import React from "react";

interface Props {
  section: string;
  title: string;
}

const SectionHeader: React.FC<Props> = ({ section, title }) => {
  return (
    <div className='relative z-10'>
      <p className='text-brand-primary font-medium'>{section}</p>
      <h2 className='text-3xl/9 lg:text-display-xl font-bold mt-5'>{title}</h2>
    </div>
  );
};

export default SectionHeader;
