import { useEffect, useRef, useState } from "react";
const ScrollComponent = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hideScrollbarTimeout, setHideScrollbarTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (hideScrollbarTimeout) {
        clearTimeout(hideScrollbarTimeout);
      }
      setHideScrollbarTimeout(
        setTimeout(() => {
          setIsScrolling(false);
        }, 2000), // Adjust the timeout period as needed
      );
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [hideScrollbarTimeout]);

  return (
    <div
      ref={scrollContainerRef}
      className={`scroll-container ${isScrolling ? "show-scrollbar" : "hide-scrollbar"}`}
      style={{ height: "400px", width: "400px", overflow: "scroll" }}
    >
      {children}
    </div>
  );
};

export default ScrollComponent;
