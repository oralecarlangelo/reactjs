import React, { useCallback } from "react";

function ParentComponent() {
  const handleClick = useCallback(() => {
    // Handle click event
    console.log("Button clicked!");
  }, []);

  return <ChildComponent onClick={handleClick} />;
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}
export default ParentComponent