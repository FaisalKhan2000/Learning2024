import { useMemo } from "react";

const num = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

const Total = () => {
  const total = useMemo(
    () => num.reduce((prev, curr) => prev + curr, 0),
    [num]
  );
  return <div>{total}</div>;
};
export default Total;
