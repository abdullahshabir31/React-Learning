function UserStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome Back!</h2>;
  }

  return <h2>Please Login</h2>;
}

function ConditionalComponent() {
  return (
    <div>
      <h1>Conditional Component</h1>

      <UserStatus isLoggedIn={true} />
      <UserStatus isLoggedIn={false} />
    </div>
  );
}

export default ConditionalComponent;
