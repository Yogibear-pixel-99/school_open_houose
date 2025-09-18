import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }
  }, [location]);

  return null;
};

export default ScrollToElement;
