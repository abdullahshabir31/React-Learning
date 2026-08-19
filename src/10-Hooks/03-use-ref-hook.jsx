import { useRef } from "react";

function UseRefHook() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>useRef Hook</h1>

      <input ref={inputRef} type="text" placeholder="Enter something" />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefHook;
