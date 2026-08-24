import { useLayoutEffect, useRef, useState } from "react";

function UseLayoutEffect() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.offsetWidth);
    }
  }, []);

  return (
    <div>
      <h1>useLayoutEffect Hook</h1>

      <div
        ref={boxRef}
        style={{
          width: "300px",
          padding: "20px",
          border: "1px solid black",
        }}
      >
        Measure this box
      </div>

      <p>Box Width: {width}px</p>
    </div>
  );
}

export default UseLayoutEffect;
