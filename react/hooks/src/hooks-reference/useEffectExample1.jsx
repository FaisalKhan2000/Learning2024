import { useState, useEffect } from "react";

const UseEffectExample1 = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // Event handler to update screen dimensions
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth, screenHeight]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="text-center bg-dark p-3 rounded shadow-lg">
        <h2 className="text-white">Screen Dimensions</h2>
        <p className="text-light">
          Width: <strong>{screenWidth}px</strong>, Height:{" "}
          <strong>{screenHeight}px</strong>
        </p>
      </div>
    </div>
  );
};

export default UseEffectExample1;
