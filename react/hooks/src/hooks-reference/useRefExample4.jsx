import { useEffect, useRef } from "react";

const UseRefExample4 = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true; // Mark as mounted

    return () => {
      isMounted.current = false; // Mark as unmounted on cleanup
    };
  }, []);

  const handleAction = () => {
    if (isMounted.current) {
      console.log("Component is mounted, performing action...");
    } else {
      console.log("Component is unmounted, action skipped.");
    }
  };

  return <button onClick={handleAction}>Check Mount Status</button>;
};
export default UseRefExample4;
