import { useEffect, useRef, useState } from "react";

const UseRefExample3 = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Previous Value: {prevCountRef.current}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default UseRefExample3;
