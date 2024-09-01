import { useEffect, useState } from "react";

const WindowWidth = () => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  return <div>{windowWidth}</div>;
};
export default WindowWidth;
