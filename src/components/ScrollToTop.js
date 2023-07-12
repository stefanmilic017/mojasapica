import React, { useEffect, useState } from "react";
import "../styles/ScrollToTop.css";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, [showButton]);

  const scrollBtn = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {showButton && (
        <div onClick={scrollBtn} className="scrollToTop">
          <i className="fas fa-chevron-up"></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
