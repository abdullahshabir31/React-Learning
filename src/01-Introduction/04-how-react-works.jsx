function HowReactWorks() {
  return (
    <div>
      <h1>How React Works</h1>

      <ol>
        <li>Creates a Virtual DOM.</li>
        <li>Compares old and new Virtual DOM.</li>
        <li>Finds the differences.</li>
        <li>Updates only the changed parts in the Real DOM.</li>
      </ol>
    </div>
  );
}

export default HowReactWorks;
