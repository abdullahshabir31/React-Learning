function MultipleConditions() {
  const role = "admin";

  let message;

  if (role === "admin") {
    message = "Welcome Admin";
  } else if (role === "editor") {
    message = "Welcome Editor";
  } else if (role === "user") {
    message = "Welcome User";
  } else {
    message = "Unknown Role";
  }

  return (
    <div>
      <h1>Multiple Conditions</h1>
      <p>{message}</p>
    </div>
  );
}

export default MultipleConditions;
