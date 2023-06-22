import React, { memo } from 'react';

// A simple functional component
function SomeComponent({ name }) {
  console.log('Rendering SomeComponent');
  return <div>Hello, {name}!</div>;
}

// Wrapping the component with memo to memoize its rendering
const MemoizedComponent = memo(SomeComponent);

function ParentMemoComponent() {
  const [count, setCount] = React.useState(0);

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Increase Count</button>
      <MemoizedComponent name={`User ${count}`} />
    </div>
  );
}

export default ParentMemoComponent;
