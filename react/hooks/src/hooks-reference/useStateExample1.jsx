import { useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleAdd = () => {
    setCount((prev) => prev + step);
  };

  const handleSubtract = () => {
    if (count > 0) setCount((prev) => prev - step);
  };

  const handleChangeStep = (e) => {
    const value = parseInt(e.target.value, 10);
    setStep(value > 0 ? value : 1); // Ensure step is always positive
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <div className="d-flex justify-content-center align-items-center mb-3">
        <button
          disabled={count === 0}
          className="btn btn-danger mx-2"
          onClick={handleSubtract}
          aria-label="Subtract"
        >
          -
        </button>
        <span className="fs-3 fw-bold mx-3">{count}</span>
        <button
          className="btn btn-success mx-2"
          onClick={handleAdd}
          aria-label="Add"
        >
          +
        </button>
      </div>
      <div className="input-group mb-3 w-25">
        <span className="input-group-text">Step</span>
        <input
          type="number"
          className="form-control"
          value={step}
          min="1"
          onChange={handleChangeStep}
          aria-label="Step Value"
        />
      </div>
    </div>
  );
};

export default UseStateExample;
