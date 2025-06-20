import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTo() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const pageSection = document.getElementById(
        location.hash.replace("#", "")
      );
      if (pageSection) {
        pageSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return null;
}

export default ScrollTo;
