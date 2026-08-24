import { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    case "reset":
      return {
        count: 0,
      };

    default:
      return state;
  }
}

function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>useReducer Hook</h1>

      <p>Count: {state.count}</p>

      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>

      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducerHook;
