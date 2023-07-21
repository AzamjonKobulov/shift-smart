'use client';

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MobileMenu: React.FC = () => {
  const { handleCloseMenu } = useContext(AppContext);

  return (
    <div className="absolute inset-0 bg-white z-50">
      <button onClick={handleCloseMenu} className="absolute top-5 right-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        necessitatibus soluta sint cumque ratione earum. Exercitationem adipisci
        inventore ratione laboriosam, perspiciatis, dolorum, quos dolor sint
        iure numquam doloremque. In adipisci beatae minus debitis incidunt
        similique ipsum, dolorum unde dolore, autem quam a ipsa, expedita illum
        deserunt maiores dicta eaque commodi quod quaerat obcaecati? Velit,
        eveniet, autem laudantium voluptatem neque eum beatae sequi error animi
        fugiat expedita exercitationem voluptatibus, praesentium rem harum cum
        saepe! Quasi fugiat iste soluta, deleniti ut velit, deserunt ullam rerum
        quidem commodi quo tempora vero recusandae numquam nulla? Maxime,
        laboriosam ea totam temporibus vel nam et hic.
      </p>
    </div>
  );
};

export default MobileMenu;
