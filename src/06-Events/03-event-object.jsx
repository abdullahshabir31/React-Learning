function EventObject() {
  const handleClick = (event) => {
    console.log(event);
    console.log("Button:", event.target);
  };

  return (
    <div>
      <h1>Event Object</h1>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default EventObject;
