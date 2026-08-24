import { useState } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((previousValue) => !previousValue);
  };

  return [value, toggle];
}

function CustomHook() {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div>
      <h1>Custom Hook</h1>

      <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"}</button>

      {isVisible && <p>This content is visible.</p>}
    </div>
  );
}

export default CustomHook;
