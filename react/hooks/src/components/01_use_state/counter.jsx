import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleAdd = () => {
    setCount((prev) => prev + step);
  };

  const handleSubtract = () => {
    if (count !== 0) setCount((prev) => prev - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container text-center mt-5">
      <h1>Counter App</h1>
      <div className="my-3">
        <h2 className="display-4">{count}</h2>
      </div>
      <div className="d-flex justify-content-center my-3">
        <button className="btn btn-primary mx-2" onClick={handleAdd}>
          Increment
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={handleSubtract}
          disabled={count === 0}
        >
          Decrement
        </button>
        <button className="btn btn-warning mx-2" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="my-3">
        <label htmlFor="step" className="form-label">
          Step:
        </label>
        <input
          type="number"
          className="form-control"
          id="step"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="1"
          style={{ width: "100px", margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

export default Counter;
