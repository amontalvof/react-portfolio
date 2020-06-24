import React, { useContext } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaAngleDoubleUp } from "react-icons/fa";
import { ScrollyContext } from "../../context/scrolly";

export default () => {
  const { conHeight } = useContext(ScrollyContext);
  const scrollBackToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <button
      className={conHeight > 200 ? "scroll-btn show-scroll-btn" : "scroll-btn"}
      onClick={scrollBackToTop}
    >
      <FaAngleDoubleUp />
    </button>
  );
};
