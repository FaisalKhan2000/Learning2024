// useState() = Re-renders the component when the state value changes

import { useEffect, useRef } from "react";

// useRef()   = "use Reference" Does not cause re-renders when its value changes.

//                     1. Accessing/Interacting with DOM elements

//                     2. Handling Focus, Animations, and Transitions

//                     3. Managing Timers and Intervals

const UseRefExample1 = () => {
  const ref = useRef(0);

  useEffect(() => {
    console.log("MOUNTED");
  });

  const handleClick = () => {
    ref.current++;

    console.log(ref.current);
  };

  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary">
        click Me
      </button>
    </div>
  );
};
export default UseRefExample1;
