function ClickEvent() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <h1>Click Event</h1>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickEvent;
