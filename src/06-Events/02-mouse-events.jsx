function MouseEvents() {
  const handleMouseEnter = () => {
    console.log("Mouse entered the button");
  };

  const handleMouseLeave = () => {
    console.log("Mouse left the button");
  };

  return (
    <div>
      <h1>Mouse Events</h1>

      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Move Mouse Over Me
      </button>
    </div>
  );
}

export default MouseEvents;
