import { lazy, Suspense, useState } from "react";

const HeavyComponent = lazy(() =>
  Promise.resolve({
    default: function HeavyComponent() {
      return (
        <div>
          <h2>Heavy Component Loaded</h2>
          <p>This component was loaded only when needed.</p>
        </div>
      );
    },
  }),
);

function LazyLoading() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <h1>Lazy Loading</h1>

      <button onClick={() => setShowComponent(true)}>Load Component</button>

      {showComponent && (
        <Suspense fallback={<p>Loading component...</p>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

export default LazyLoading;
