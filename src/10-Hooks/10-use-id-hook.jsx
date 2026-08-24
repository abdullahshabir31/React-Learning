import { useId } from "react";

function UseIdHook() {
  const nameId = useId();
  const emailId = useId();

  return (
    <div>
      <h1>useId Hook</h1>

      <div>
        <label htmlFor={nameId}>Name</label>

        <input id={nameId} type="text" placeholder="Enter your name" />
      </div>

      <br />

      <div>
        <label htmlFor={emailId}>Email</label>

        <input id={emailId} type="email" placeholder="Enter your email" />
      </div>
    </div>
  );
}

export default UseIdHook;
