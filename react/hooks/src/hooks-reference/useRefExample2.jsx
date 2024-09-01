import { useRef } from "react";

const UseRefExample2 = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.background = "red";
  };
  return (
    <div>
      <input ref={inputRef} type="text" name="" id="" />
      <button onClick={focusInput}>Focus Input!</button>
    </div>
  );
};
export default UseRefExample2;
