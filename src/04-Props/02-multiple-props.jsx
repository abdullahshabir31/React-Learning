function Student({ name, age, department }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </div>
  );
}

function MultipleProps() {
  return (
    <div>
      <h1>Multiple Props</h1>

      <Student name="Abdullah" age={24} department="Computer Science" />

      <Student name="Ahmed" age={22} department="Software Engineering" />
    </div>
  );
}

export default MultipleProps;
