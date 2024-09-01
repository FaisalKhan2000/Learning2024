import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerExample1 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Counter</h1>
      <div className="btn-group" role="group" aria-label="Counter Controls">
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <span className="mx-3">{state.count}</span>
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default UseReducerExample1;
