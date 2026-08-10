function Card({ children }) {
  return (
    <div>
      <h2>Card</h2>
      {children}
    </div>
  );
}

function ChildrenProps() {
  return (
    <div>
      <h1>Children Props</h1>

      <Card>
        <p>This content is passed using children props.</p>
      </Card>

      <Card>
        <button>Learn More</button>
      </Card>
    </div>
  );
}

export default ChildrenProps;
