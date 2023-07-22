import React from "react";
import { Arrow } from "../icons";

const SwiperButton = ({ left, btn }: { btn: string; left?: boolean }) => {
  return (
    <button
      type='button'
      className={`${
        left ? `${btn}-prev-btn` : `${btn}-next-btn`
      } w-14 h-14 shrink-0 bg-brand-primary hover:bg-black text-white rounded-full transition-colors duration-200`}>
      <span className={`w-7 block mx-auto ${left && "-rotate-180"}`}>
        <Arrow />
      </span>
    </button>
  );
};

export default SwiperButton;
